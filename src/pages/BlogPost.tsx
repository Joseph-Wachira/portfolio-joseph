import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { blogPosts } from '@/config/blog';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-bold">Post not found</h2>
        <Link to="/blog" className="mt-4 text-brand-400 underline">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Joseph Wachira</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.image && <meta property="og:image" content={post.image} />}
      </Helmet>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen px-6 py-24"
      >
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-400"
          >
            <ArrowLeft size={16} /> All articles
          </Link>

          {post.image && (
            <div className="mb-8 overflow-hidden rounded-2xl">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </div>
          )}

          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-4 text-base leading-8 text-muted-foreground">
            <div className="whitespace-pre-line">{post.content}</div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
              </Button>
            </Link>
          </div>
        </div>
      </motion.article>
    </>
  );
}
