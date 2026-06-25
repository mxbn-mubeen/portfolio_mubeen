export const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

    {/* Gradient Orbs with Mouse Interaction */}
    <div className="absolute w-[600px] h-[600px] top-[10%] left-[5%] orb-translate-30 bg-primary/30 rounded-full blur-[120px] animate-pulse transition-transform duration-1000" />
    <div className="absolute w-[700px] h-[700px] bottom-[5%] right-[5%] orb-translate--20 bg-secondary/20 rounded-full blur-[150px] animate-pulse transition-transform duration-1000 anim-delay-1s" />
    <div className="absolute w-[400px] h-[400px] top-[30%] right-[15%] orb-translate-40 bg-accent/20 rounded-full blur-[100px] animate-pulse transition-transform duration-1000 anim-delay-2s" />

    {/* Floating Code Snippets */}
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`absolute text-primary/10 font-mono text-sm animate-float-complex opacity-20 hidden md:block snippet-pos-${i} ${i > 0 ? `anim-delay-${i * 500}` : ''} anim-duration-${8000 + i * 1000}`}
      >
        {['</>', '{ }', '( )', '[ ]', '=>', 'fn()'][i]}
      </div>
    ))}

    {/* Overlay */}
    <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
  </div>
);
