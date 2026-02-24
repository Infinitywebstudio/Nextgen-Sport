const MarqueeSection = () => {
  return (
    <section className="nex-marquee">
      <div className="nex-marquee__track">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="nex-marquee__text nex-title">
            GÉNÉRATION ELITE
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
