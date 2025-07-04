const InvestorsSection = () => {
  const benefits = [
    {
      title: "Fractional Ownership",
      description: "Access high-value assets with smaller investment amounts through fractional ownership",
      icon: "🪙"
    },
    {
      title: "Portfolio Diversification",
      description: "Diversify your portfolio with real estate, commodities, art, and other RWAs",
      icon: "📊"
    },
    {
      title: "Liquidity & Trading",
      description: "Trade tokenized assets 24/7 on our secondary marketplace with instant settlement",
      icon: "💱"
    },
    {
      title: "Transparency",
      description: "Full transparency through blockchain technology and verified asset documentation",
      icon: "🔍"
    }
  ];

  return (
    <section id="investors" className="py-20 relative bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            For <span className="bg-gradient-primary bg-clip-text text-transparent">Investors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover new investment opportunities in real-world assets. 
            Build a diversified portfolio with fractional ownership and enhanced liquidity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass p-6 rounded-lg hover:neon-glow transition-all duration-300 hover:scale-105 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass px-8 py-3 rounded-lg hover:neon-glow transition-all duration-300 text-primary font-semibold">
            Explore Investment Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;