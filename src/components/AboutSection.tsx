const AboutSection = () => {
  const skills = [
    { name: "DID", icon: "🆔" },
    { name: "Fireblocks", icon: "🔥" },
    { name: "Sumsub", icon: "🛡️" },
    { name: "IPFS", icon: "📁" },
    { name: "Polygon", icon: "⬡" },
    { name: "Solana", icon: "◎" },
    { name: "Ethereum", icon: "Ξ" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar/Profile */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-spin">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Profile image */}
              <div className="absolute inset-4 rounded-full overflow-hidden neon-glow flex items-center justify-center bg-background">
                <img 
                  src="/lovable-uploads/b38d1f6e-4f95-47d6-815f-9af70763f17a.png"
                  alt="COPYm Logo"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
            
            {/* Floating elements around avatar */}
            <div className="absolute top-0 right-0 glass p-3 rounded-lg animate-pulse-glow">
              <span className="text-2xl">🔒</span>
            </div>
            <div className="absolute bottom-0 left-0 glass p-3 rounded-lg animate-pulse-glow" style={{ animationDelay: "1s" }}>
              <span className="text-2xl">🌍</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">COPYm</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                COPYm revolutionizes real-world asset tokenization through cutting-edge blockchain technology. 
                Our platform combines Decentralized Identity (DID), Verifiable Credentials (VC), and multi-chain 
                support to create a secure, transparent, and accessible marketplace for fractional ownership.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From luxury watches and gold to real estate and intellectual property, we're building the 
                infrastructure for the future of asset ownership and investment.
              </p>
            </div>

            {/* Skills/Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Powered By</h3>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="glass p-4 rounded-lg text-center hover:neon-glow transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="text-xs text-muted-foreground">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Key Features</h3>
              <div className="space-y-3">
                {[
                  "Soulbound NFT Identity Verification",
                  "Multi-chain Asset Tokenization",
                  "Fractional Ownership & Trading",
                  "Automated Compliance & KYC/KYB"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full neon-glow" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;