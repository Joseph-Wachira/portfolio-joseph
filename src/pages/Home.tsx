import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Testimonials } from '@/components/sections/Testimonials';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Joseph Wachira | Software Engineer</title>
        <meta name="description" content="Portfolio of Joseph Wachira, full-stack developer from Kenya." />
        <meta property="og:title" content="Joseph Wachira - Software Engineer" />
        <meta property="og:description" content="Building scalable digital products." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Hero />
        <Skills />
        <Projects featuredOnly />
        <Experience />
        <Testimonials />
      </motion.div>
    </>
  );
}