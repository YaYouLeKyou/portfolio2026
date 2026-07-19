import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ecommerce,
  reactmovies,
  smartedu,
  findmyworkai
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/LLM Integration",
    icon: backend,
  },
  {
    title: "Web Scraping & APIs",
    icon: web,
  },
  {
    title: "Full-Stack Development",
    icon: mobile,
  },
  {
    title: "Production Deployment",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "FastAPI",
    icon: backend,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer – React Projects",
    company_name: "Eshop, Crypto app...",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022 - Today",
    points: [
      "Developing and maintaining interactive web applications using React.js, Hooks, and modern JavaScript features.",
      "Collaborating with UI/UX designers and backend teams to build user-focused, scalable features.",
      "Implementing responsive layouts with CSS modules, Tailwind, and styled-components.",
      "Participating in code reviews, version control with Git, and optimizing performance using React best practices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ABC Architecture, Demenagement Paris.com, France culture connection...",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2020 - 2022",
    points: [
      "Building static and dynamic websites for businesses and organizations using HTML5, CSS3, and JavaScript.",
      "Ensuring cross-browser compatibility and accessibility standards across devices.",
      "Integrating third-party APIs (e.g., maps, contact forms, booking systems).",
      "Providing ongoing maintenance, SEO improvements, and performance optimization.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Blog, websites, articles for company and institutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "Designing and customizing WordPress themes for SMEs, NGOs, and creative portfolios.",
      "Implementing Elementor, WPBakery, and custom PHP templates for client-specific functionality.",
      "Managing plugins, security updates, and user training for content management.",
      "Optimizing site speed, mobile responsiveness, and integration with Google Analytics/SEO tools.",]
  },
  {
    title: "Trainer & AI in Education Expert",
    company_name: "Erasmus+: Smart Edu AI, hidden geniuses, fablab",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Designing and delivering hands-on training sessions on AI tools and digital pedagogy for educators and youth workers across Europe.",
      "Creating interactive learning environments using platforms like ChatGPT, Eduaide.AI, Actionbound, Trello, and MagicSchool.",
      "Teaching students how to build fully functional websites from the ground up using HTML, CSS, JavaScript, and responsive design principles.",
      "Supporting participants in building real-world educational scenarios that integrate AI tools to enhance engagement, personalization, and assessment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Starter Website – €250\n\nResponsive 3–5 page website with clean, modern design, mobile-friendly layout, and basic interactivity. Ideal for personal projects or small businesses.",
  },
  {
    testimonial:
      "Pro Web Package – €450\n\nUp to 8 pages with dynamic content, animations, and integration with APIs or WordPress. Perfect for portfolios, blogs, or small business websites.",
  },
  {
    testimonial:
      "Full Web Experience – €750+\n\nCustom website or web app with advanced interactivity, responsive design, SEO basics, and optional e-commerce functionality. Designed for startups or professional projects.",
  },
];
const projects = [
  {
    name: "Find my work",
    description:
      "AI-powered job search application that orchestrates 4 LLM providers (Groq, Gemini, Ollama, xAI) with automatic fallback, scrapes job offers from LinkedIn/Indeed/Glassdoor/France Travail, and uses Redis caching for optimal performance.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "LLM",
        color: "green-text-gradient",
      },
      {
        name: "scraping",
        color: "pink-text-gradient",
      },
    ],
    category: "AI",
    image: findmyworkai,
    source_code_link: "https://github.com/YaYouLeKyou",
    web_link: "https://projectsportefolio.netlify.app/projects"
  },
  {
    name: "Find my work",
    description:
      "AI-powered job search application that orchestrates 4 LLM providers (Groq, Gemini, Ollama, xAI) with automatic fallback, scrapes job offers from LinkedIn/Indeed/Glassdoor/France Travail, and uses Redis caching for optimal performance.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "LLM",
        color: "green-text-gradient",
      },
      {
        name: "scraping",
        color: "pink-text-gradient",
      },
    ],
    category: "Full-Stack",
    image: findmyworkai,
    source_code_link: "https://github.com/YaYouLeKyou",
    web_link: "https://projectsportefolio.netlify.app/projects"
  },
  {
    name: "Ecommerce",
    description:
      "modern react e-commerce website using Next.js, with Sanity.io for content management and Stripe for secure payments. The site features a dynamic product catalog easy to maintain and scale.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    category: "Full-Stack",
    image: ecommerce,
    source_code_link: "https://github.com/YaYouLeKyou/eco",
    web_link: "https://ecommerce-jsm.netlify.app/"
  },
  {
    name: "React-movies",
    description:
      "React-Movie is a React app that uses a movie API to let users search for films and get personalized recommendations, providing a fast and interactive way to discover new movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "themoviedb",
        color: "pink-text-gradient",
      },
    ],
    category: "Full-Stack",
    image: reactmovies,
    source_code_link: "https://github.com/YaYouLeKyou/react-starter",
    web_link: "https://react-movies-app-by-yayou.netlify.app/"
  },
  {
    name: "Demenagement Paris.com",
    description:
      "Website with an integrated volume calculator. Book your move with complete peace of mind.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    category: "Web",
    image: carrent,
    source_code_link: "https://github.com/YaYouLeKyou/demenagement-paris.com",
    web_link: "https://demenagement-paris.netlify.app/"
  },
  {
    name: "ABC Architecture",
    description:
      "A website designed to showcase an architecture firm's work with clarity and style. It features a clean layout, interactive project galleries, and a smooth navigation system.",
    tags: [
      {
        name: "locomotive.js",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    category: "Web",
    image: jobit,
    source_code_link: "https://github.com/YaYouLeKyou/abc-0.91",
    web_link: "https://abc-architecture.netlify.app/"
  },
  {
    name: "Smart Edu AI - Erasmus+",
    description:
      "Smart Edu AI is a blog and educational platform where I served as an AI expert, sharing insights and strategies on transforming education with artificial intelligence.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "Education",
        color: "pink-text-gradient",
      },
    ],
    category: "Web",
    image: smartedu,
    source_code_link: "https://github.com/YaYouLeKyou/smartedu",
    web_link: "https://smarteduai.netlify.app/"
  },
  {
    name: "My Universe",
    description:
      "Explore a medley of my previous projects—ranging from sleek business websites to creative apps and AI-enhanced educational platforms. Each one reflects a unique blend of design, functionality, and purpose.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "portfolio",
        color: "green-text-gradient",
      },
      {
        name: "showcase",
        color: "pink-text-gradient",
      },
    ],
    category: "Web",
    image: tripguide,
    source_code_link: "https://github.com/YaYouLeKyou",
    web_link: "https://projectsportefolio.netlify.app/projects"
  },
  {
    name: "My Universe",
    description:
      "Explore a medley of my previous projects—ranging from sleek business websites to creative apps and AI-enhanced educational platforms. Each one reflects a unique blend of design, functionality, and purpose.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "portfolio",
        color: "green-text-gradient",
      },
      {
        name: "showcase",
        color: "pink-text-gradient",
      },
    ],
    category: "Full-Stack",
    image: tripguide,
    source_code_link: "https://github.com/YaYouLeKyou",
    web_link: "https://projectsportefolio.netlify.app/projects"
  },

];

export { services, technologies, experiences, testimonials, projects };
