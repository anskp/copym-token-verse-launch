const IssuersSection = () => {
  const features = [
    {
      title: "Asset Tokenization",
      description: "Transform your real-world assets into digital tokens with full regulatory compliance",
      icon: "🏗️"
    },
    {
      title: "Smart Contracts",
      description: "Automated compliance and transparent ownership distribution through smart contracts",
      icon: "📜"
    },
    {
      title: "Global Reach",
      description: "Access international investors and expand your funding opportunities worldwide",
      icon: "🌍"
    },
    {
      title: "Regulatory Compliance",
      description: "Built-in KYC/KYB processes ensuring full regulatory compliance across jurisdictions",
      icon: "⚖️"
    }
  ];

  return (
    <section id="issuers" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            For <span className="bg-gradient-primary bg-clip-text text-transparent">Issuers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock the value of your real-world assets by tokenizing them on the blockchain. 
            Reach global investors and create new revenue streams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass p-6 rounded-lg hover:neon-glow transition-all duration-300 hover:scale-105 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass px-8 py-3 rounded-lg hover:neon-glow transition-all duration-300 text-primary font-semibold">
            Start Tokenizing Assets
          </button>
        </div>
      </div>
    </section>
  );
};

export default IssuersSection;