import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/config/blog';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Clock } from 'lucide-react';

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Helmet>
        <title>Blog | Joseph Wachira</title>
        <meta
          name="description"
          content="Articles on software engineering, architecture, and modern web development."
        />
      </Helmet>

      <section className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Thoughts, tutorials, and deep dives on software engineering.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm"
              >
                {post.image ? (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-brand-500/20 to-purple-500/20">
                    <span className="text-3xl text-white/20">📝</span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="mb-2 text-xl font-semibold leading-snug transition-colors group-hover:text-brand-400">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm text-muted-foreground">{post.excerpt}</p>

                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readingTime} min read</span>
                    </div>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                  >
                    Read article <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              <p className="text-lg">No articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
