const MarketplaceSection = () => {
  const marketplaceFlow = [
    {
      actor: "Issuer",
      action: "Tokenize Asset",
      description: "Upload asset documentation and create token representation",
      icon: "🏭",
      color: "from-blue-500 to-purple-500"
    },
    {
      actor: "Platform",
      action: "Verify & List",
      description: "Automated compliance checks and marketplace listing",
      icon: "🔍",
      color: "from-purple-500 to-pink-500"
    },
    {
      actor: "Investor",
      action: "Browse & Invest",
      description: "Discover opportunities and purchase fractional shares",
      icon: "💰",
      color: "from-pink-500 to-red-500"
    },
    {
      actor: "Smart Contract",
      action: "Execute Trade",
      description: "Automated settlement and credential issuance",
      icon: "⚡",
      color: "from-red-500 to-orange-500"
    }
  ];

  const interactionFeatures = [
    "Real-time price discovery",
    "Instant settlement",
    "Fractional ownership",
    "Yield distribution",
    "Liquidity pools",
    "Cross-chain trading"
  ];

  return (
    <section id="marketplace" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Marketplace <span className="bg-gradient-primary bg-clip-text text-transparent">Interaction</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless flow from asset tokenization to investor participation, 
            powered by smart contracts and automated compliance.
          </p>
        </div>

        {/* Interactive Flow Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {marketplaceFlow.map((step, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full neon-glow hidden lg:block" />
                
                {/* Card */}
                <div className="glass p-6 rounded-xl hover:neon-glow transition-all duration-500 hover:scale-105 mt-8 lg:mt-12">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 mx-auto neon-glow`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="font-bold text-lg text-primary">{step.actor}</h3>
                    <h4 className="font-semibold">{step.action}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {/* Hover Details */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full glass border border-primary/50 rounded-lg py-2 text-sm text-primary hover:bg-primary/10 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Features List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Marketplace Features</h3>
            
            <div className="grid gap-4">
              {interactionFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 glass p-4 rounded-lg hover:neon-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-3 h-3 bg-gradient-primary rounded-full neon-glow" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Interactive Demo */}
          <div className="relative">
            <div className="glass p-8 rounded-xl neon-glow">
              <h4 className="text-xl font-bold mb-6 text-center">Live Trading Interface</h4>
              
              {/* Mock Trading Interface */}
              <div className="space-y-4">
                {/* Asset Info */}
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                  <span className="text-sm">Gold Token (AUXX)</span>
                  <span className="text-primary font-bold">$2,450.00</span>
                </div>
                
                {/* Price Chart Placeholder */}
                <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">📈 Real-time Price Chart</span>
                </div>
                
                {/* Trading Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-green-500/20 border border-green-500/50 rounded-lg py-3 text-green-400 font-semibold hover:bg-green-500/30 transition-colors">
                    Buy
                  </button>
                  <button className="bg-red-500/20 border border-red-500/50 rounded-lg py-3 text-red-400 font-semibold hover:bg-red-500/30 transition-colors">
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;