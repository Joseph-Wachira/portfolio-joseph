export default function About() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            About Me
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Hi there, I&apos;m Joseph</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            I&apos;m a fullstack developer crafting interactive web experiences and blending
            technology with visual storytelling.
          </p>
        </div>

        <div className="grid gap-6 rounded-2xl border border-border/60 bg-card/60 p-8 shadow-sm backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I build scalable, user-friendly web applications from concept to deployment,
              with a focus on thoughtful UI, smooth interactions, and reliable architecture.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• I&apos;m passionate about building products that feel polished, intuitive, and meaningful.</li>
              <li>• I&apos;m currently expanding my knowledge in cloud architecture, DevOps, and real-time data experiences.</li>
              <li>• I enjoy working across the stack with React, Node.js, Python, and modern databases.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-background/70 p-6">
            <h2 className="text-xl font-semibold">What I&apos;m into</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• React and modern frontend systems</li>
              <li>• Backend APIs and database design</li>
              <li>• UI/UX craftsmanship and animation</li>
              <li>• Open-source collaboration and creative problem-solving</li>
            </ul>
            <a
              href="mailto:josephwachira505@gmail.com"
              className="mt-6 inline-flex text-sm font-medium text-primary transition hover:opacity-80"
            >
              Reach me at josephwachira505@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
