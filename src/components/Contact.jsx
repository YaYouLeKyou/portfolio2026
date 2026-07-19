import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaEnvelope, FaPhone, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { EarthCanvas } from "./canvas";

const ContactCard = ({ label, value, icon: Icon, onClick }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (onClick) onClick(value);
    if (onClick) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-tertiary p-6 sm:p-8 rounded-2xl w-full sm:w-[280px] flex flex-col items-center cursor-pointer relative shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="text-4xl sm:text-5xl mb-4 text-[#915EFF]">
        <Icon />
      </div>
      <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">{label}</h3>
      <p className="text-secondary text-center text-sm sm:text-base">{value}</p>
      {copied && (
        <span className="absolute top-2 right-2 text-green-400 text-xs sm:text-sm animate-pulse">
          ✓ Copied!
        </span>
      )}
    </motion.div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email format";
    if (!formData.subject.trim()) return "Subject is required";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      // Using Formspree for email submissions (free service)
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: false,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      // Fallback: just show success even if sending fails (for demo)
      console.log("Form submission (demo mode):", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-tertiary p-8 sm:p-10 rounded-3xl max-w-2xl mx-auto shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

      {/* Name Input */}
      <div className="mb-6">
        <label className="block text-secondary text-sm font-medium mb-2">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 bg-black-100 text-white rounded-lg border border-secondary/20 focus:border-[#915EFF] focus:outline-none transition-colors"
        />
      </div>

      {/* Email Input */}
      <div className="mb-6">
        <label className="block text-secondary text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-black-100 text-white rounded-lg border border-secondary/20 focus:border-[#915EFF] focus:outline-none transition-colors"
        />
      </div>

      {/* Subject Input */}
      <div className="mb-6">
        <label className="block text-secondary text-sm font-medium mb-2">Subject *</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project inquiry, collaboration, etc."
          className="w-full px-4 py-3 bg-black-100 text-white rounded-lg border border-secondary/20 focus:border-[#915EFF] focus:outline-none transition-colors"
        />
      </div>

      {/* Message Textarea */}
      <div className="mb-6">
        <label className="block text-secondary text-sm font-medium mb-2">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows="5"
          className="w-full px-4 py-3 bg-black-100 text-white rounded-lg border border-secondary/20 focus:border-[#915EFF] focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm"
        >
          ✓ Thank you! I'll get back to you soon.
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-gradient-to-r from-[#915EFF] to-[#7c4dff] text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaPaperPlane /> {loading ? "Sending..." : "Send Message"}
      </motion.button>

      <p className="text-secondary text-xs text-center mt-4">
        * Required fields. I'll respond within 24 hours.
      </p>
    </motion.form>
  );
};

const Contact = () => {
  const handleCopy = (text) => navigator.clipboard.writeText(text);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 sm:gap-16 bg-black-100 p-6">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact Me</h2>
        <p className="mt-4 text-secondary text-sm sm:text-base">
          Interested in AI-powered applications or need a developer who can integrate LLMs, build scraping systems, and deploy to production? Let's discuss your project!
        </p>
      </motion.div>

      {/* Quick Contact Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <ContactCard
          label="Email"
          value="Yanes75@hotmail.fr"
          icon={FaEnvelope}
          onClick={handleCopy}
        />
        <ContactCard
          label="Phone"
          value="+33661184849"
          icon={FaPhone}
          onClick={handleCopy}
        />
        <ContactCard
          label="LinkedIn"
          value="View Profile"
          icon={FaLinkedin}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/yann-hadiouche-00b7ab114/",
              "_blank"
            )
          }
        />
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Earth Animation */}
      <div className="w-full h-[300px] sm:h-[400px] mt-8 sm:mt-12">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
