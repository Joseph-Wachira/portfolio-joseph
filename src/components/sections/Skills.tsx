import { motion } from 'framer-motion';
import { skills } from '@/config/skills';
import { RevealText } from '@/components/animations/RevealText';
import { ParallaxSection } from '@/components/animations/ParallaxSection';

export function Skills() {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="px-6 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <ParallaxSection speed={0.3}>
        <div className="mx-auto max-w-6xl relative z-10">
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
              <span className="text-sm font-medium text-primary">Tech Stack</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <RevealText>Skills & Technologies</RevealText>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <RevealText delay={0.2}>
                Core technologies and tools I use to build modern web applications
              </RevealText>
            </p>
          </motion.div>

          {/* Skills by category */}
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="mb-16 last:mb-0"
              >
                <motion.h3
                  className="text-2xl font-bold mb-8 text-center md:text-left"
                  whileInView={{ x: [0, 10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {category}
                </motion.h3>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.05,
                        transition: { type: 'spring', stiffness: 400, damping: 10 }
                      }}
                      className="group relative"
                    >
                      <div className="glass-strong rounded-xl p-6 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                        {/* Hover glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.5, rotate: 45 }}
                          transition={{ duration: 0.8 }}
                        />

                        {/* Icon or Emoji */}
                        <motion.div
                          className="text-4xl mb-3 relative z-10"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.logo || '⚡'}
                        </motion.div>

                        {/* Skill name */}
                        <h4 className="text-sm font-semibold relative z-10">
                          {skill.name}
                        </h4>

                        {/* Experience level indicator */}
                        <motion.div
                          className="mt-3 flex gap-1 relative z-10"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: skillIndex * 0.05 + 0.3 }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`h-1 w-2 rounded-full ${
                                i < (skill.level === 'Expert' ? 5 : skill.level === 'Advanced' ? 4 : skill.level === 'Intermediate' ? 3 : 2)
                                  ? 'bg-primary'
                                  : 'bg-muted'
                              }`}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ delay: i * 0.1 }}
                            />
                          ))}
                        </motion.div>

                        {/* Experience years */}
                        <p className="text-xs text-muted-foreground mt-2 relative z-10">
                          {skill.years}+ years
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </ParallaxSection>
    </section>
  );
}
