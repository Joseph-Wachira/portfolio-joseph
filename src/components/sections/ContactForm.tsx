import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { RevealText } from '@/components/animations/RevealText';
import { ParallaxSection } from '@/components/animations/ParallaxSection';

export function ContactForm() {
  return (
    <section className="px-6 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <ParallaxSection speed={0.3}>
        <div className="mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 mb-4 rounded-full glass"
            >
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <RevealText>Let's Work Together</RevealText>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <RevealText delay={0.2}>
                Have a project in mind? Let's discuss how we can work together
              </RevealText>
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <motion.a
              href="mailto:joseph@example.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-strong rounded-xl p-6 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4"
              >
                <Mail className="w-6 h-6" />
              </motion.div>
              <h3 className="text-sm font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Get in touch via email
              </p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/joseph-wachira"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-strong rounded-xl p-6 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4"
              >
                <Phone className="w-6 h-6" />
              </motion.div>
              <h3 className="text-sm font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Connect on LinkedIn
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="glass-strong rounded-xl p-6 text-center group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4"
              >
                <MapPin className="w-6 h-6" />
              </motion.div>
              <h3 className="text-sm font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                Nairobi, Kenya
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center glass-strong rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I'm currently available for freelance work and open to discussing new opportunities.
            </p>
            <motion.a
              href="mailto:joseph@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </motion.a>
          </motion.div>
        </div>
      </ParallaxSection>
    </section>
  );
}
