import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/worldplanet-MuZuqDOc41n9MCLHOA73Ibzd/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30 z-10" />

      {/* Floating orbs */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        <div className="glow-orb absolute top-1/4 left-1/6 w-24 h-24 opacity-40" />
        <div className="glow-orb absolute top-1/2 right-1/4 w-32 h-32 opacity-30" style={{ animationDelay: "2s" }} />
        <div className="glow-orb absolute bottom-1/3 left-1/2 w-20 h-20 opacity-35" style={{ animationDelay: "4s" }} />
        <div className="glow-orb absolute top-3/4 right-1/6 w-28 h-28 opacity-25" style={{ animationDelay: "6s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tokenizing
              </span>
              <br />
              <span className="text-foreground">
                Real-World Assets
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Secure. Fractional. Transparent.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 neon-glow px-8 py-4 text-lg font-semibold"
            >
              Tokenize Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
            >
              Explore Marketplace
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$2.5M+", label: "Assets Tokenized" },
              { value: "150+", label: "Active Projects" },
              { value: "5K+", label: "Verified Users" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-lg p-6 hover:neon-glow transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;