const PlatformSection = () => {
  return (
    <section id="platform" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Future of <span className="bg-gradient-primary bg-clip-text text-transparent">RWA Trading</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience seamless real-world asset tokenization and trading through our cutting-edge platform
            </p>
            
            <div className="relative w-full max-w-3xl mx-auto">
              <img 
                src="/lovable-uploads/86ae0d32-37d2-4483-b6c0-fc56580cefaf.png"
                alt="COPYm RWA Marketplace Platform"
                className="w-full h-auto rounded-lg neon-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;