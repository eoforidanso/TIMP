import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyTimpWorks from './components/WhyTimpWorks';
import Framework from './components/Framework';
import Programs from './components/Programs';
import MenteeJourney from './components/MenteeJourney';
import Impact from './components/Impact';
import SuccessCounter from './components/SuccessCounter';
import MentorDashboard from './components/MentorDashboard';
import GlobalImpact from './components/GlobalImpact';
import MentorRecruitment from './components/MentorRecruitment';
import ResourceLibrary from './components/ResourceLibrary';
import NewsletterSignup from './components/NewsletterSignup';
import Contact from './components/Contact';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import './animations.css';
import './visual-motif.css';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all elements with scroll animations
    document.querySelectorAll('.scroll-fade-up, .scroll-scale-in').forEach((el) => {
      observer.observe(el);
    });

    // Parallax effect
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((el) => {
        const scrollPosition = window.pageYOffset;
        const elementOffset = el.offsetTop;
        const distance = scrollPosition - elementOffset;
        el.style.transform = `translateY(${distance * 0.1}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyTimpWorks />
      <Framework />
      <Programs />
      <MenteeJourney />
      <Impact />
      <SuccessCounter />
      <MentorDashboard />
      <GlobalImpact />
      <MentorRecruitment />
      <ResourceLibrary />
      <NewsletterSignup />
      <Contact />
      <FooterCTA />
      <Footer />
    </>
  );
}

export default App;
