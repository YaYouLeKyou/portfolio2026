import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, FeaturedProject, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Resume, ServiceCards } from "./components";

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <FeaturedProject />
        <ServiceCards />
        <Works />
        <Resume />
        <Tech />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
