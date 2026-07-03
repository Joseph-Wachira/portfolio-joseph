export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/3 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background" />
    </div>
  );
}