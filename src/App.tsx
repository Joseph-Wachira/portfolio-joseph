import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { ContactForm } from './components/sections/ContactForm';
import Layout from './components/layout/Layout';
import { MagneticCursor } from './components/animations/MagneticCursor';
import { ScrollProgress } from './components/animations/ScrollProgress';

function App() {
  return (
    <>
      <Helmet>
        <title>Joseph Wachira | Software Engineer Portfolio</title>
        <meta name="description" content="Full-stack software engineer from Kenya specializing in building scalable digital products." />
        <meta property="og:title" content="Joseph Wachira - Software Engineer" />
        <meta property="og:description" content="Building scalable digital products." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ScrollProgress />
      <MagneticCursor />

      <Layout>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <section id="home">
            <Hero />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Projects featuredOnly={false} />
          </section>

          {/* Experience Section */}
          <section id="experience">
            <Experience />
          </section>

          {/* Testimonials Section */}
          <section id="testimonials">
            <Testimonials />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ContactForm />
          </section>
        </motion.div>
      </Layout>
    </>
  );
}

export default App;