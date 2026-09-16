import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/config/experience';
import { RevealText } from '@/components/animations/RevealText';
import { ParallaxSection } from '@/components/animations/ParallaxSection';

function formatDate(value: string) {
  const [year, month] = value.split('-');
  if (!month) return year;
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function Experience() {
  return (
    <section className="px-6 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <ParallaxSection speed={0.2}>
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
              <span className="text-sm font-medium text-primary">Career</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <RevealText>Experience</RevealText>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <RevealText delay={0.2}>
                A snapshot of my recent work and professional background
              </RevealText>
            </p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-strong rounded-xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {experience.type}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-1">
                      {experience.company} · {experience.location}
                    </p>

                    <p className="text-xs text-muted-foreground mb-4">
                      {formatDate(experience.startDate)} — {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}
