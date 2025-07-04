const IdentitySection = () => {
  const didSteps = [
    {
      step: "1",
      title: "Identity Verification",
      description: "Complete KYC/KYB through Sumsub integration",
      icon: "🆔"
    },
    {
      step: "2", 
      title: "Soulbound NFT",
      description: "Receive your unique identity badge",
      icon: "🏆"
    },
    {
      step: "3",
      title: "Verifiable Credentials",
      description: "Earn trust-based credentials for trading",
      icon: "📜"
    },
    {
      step: "4",
      title: "Secure Trading",
      description: "Access marketplace with verified identity",
      icon: "🔐"
    }
  ];

  const features = [
    {
      title: "Decentralized Identity (DID)",
      description: "Self-sovereign identity that you control completely",
      icon: "🌐"
    },
    {
      title: "Soulbound NFT Badges",
      description: "Non-transferable proof of identity and achievements",
      icon: "🎖️"
    },
    {
      title: "Verifiable Credentials",
      description: "Cryptographic proof of qualifications and compliance",
      icon: "✅"
    },
    {
      title: "Zero-Knowledge Proofs",
      description: "Verify identity without revealing sensitive data",
      icon: "🔍"
    }
  ];

  return (
    <section id="identity" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Identity & <span className="bg-gradient-primary bg-clip-text text-transparent">Verifiability</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on cutting-edge identity infrastructure, ensuring trust, compliance, 
            and security in every transaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - DID Process Flow */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Identity Verification Process</h3>
            
            <div className="space-y-6">
              {didSteps.map((step, index) => (
                <div 
                  key={step.step}
                  className="flex items-start space-x-4 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center neon-glow group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg">{step.icon}</span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-primary">STEP {step.step}</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                    </div>
                    <h4 className="text-lg font-semibold">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Badge */}
            <div className="glass p-6 rounded-xl hover:neon-glow transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-2xl">🎖️</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Verified Badge</h4>
                  <p className="text-muted-foreground">Your trust score and verification level</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Core Identity Features</h3>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass p-6 rounded-xl hover:neon-glow transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center neon-glow">
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Partners */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-primary">Powered by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Fireblocks", "Sumsub", "IPFS", "Polygon ID", "Ceramic Network"].map((partner, index) => (
              <div 
                key={partner}
                className="glass px-6 py-3 rounded-lg hover:opacity-100 transition-opacity duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;