const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb absolute top-1/4 left-1/6 w-16 h-16 opacity-20" />
        <div className="glow-orb absolute bottom-1/4 right-1/6 w-20 h-20 opacity-15" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg neon-glow" />
              <span className="text-xl font-bold">COPYm</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Tokenizing real-world assets for a decentralized future.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {["About", "Docs", "Launch DApp"].map((item) => (
              <a key={item} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-end space-x-4">
            {["💻", "💬", "🐦", "💼"].map((icon, index) => (
              <div key={index} className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:neon-glow transition-all duration-300 cursor-pointer">
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          © 2024 COPYm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;