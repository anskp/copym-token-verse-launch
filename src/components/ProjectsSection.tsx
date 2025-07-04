const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      type: "Gold",
      image: "/lovable-uploads/54d42107-7cf6-4f4b-b60d-e4c1fd295624.png",
      tokenSupply: "10,000",
      roi: "+15.2%",
      soldPercentage: 75,
      description: "Premium gold bars tokenized for fractional investment"
    },
    {
      id: 2,
      type: "Luxury Watch",
      image: "/lovable-uploads/f9498d05-6913-4d0f-a7e6-4ccea6672af6.png",
      tokenSupply: "5,000",
      roi: "+22.8%",
      soldPercentage: 90,
      description: "Vintage Rolex collection with verified authenticity"
    },
    {
      id: 3,
      type: "Real Estate",
      image: "/lovable-uploads/c7d29fad-4139-49a1-882a-1cce5962e24f.png",
      tokenSupply: "25,000",
      roi: "+18.5%",
      soldPercentage: 65,
      description: "Commercial property in downtown financial district"
    },
    {
      id: 4,
      type: "Ethereum Assets",
      image: "/lovable-uploads/da6a72e3-94de-4f63-a3bf-2796461d2ee9.png",
      tokenSupply: "50,000",
      roi: "+45.3%",
      soldPercentage: 85,
      description: "Ethereum-based DeFi protocol tokens and staking rewards"
    },
    {
      id: 5,
      type: "Intellectual Property",
      image: "/lovable-uploads/1a09a4d3-ab0a-4afa-8985-18732f9ed709.png",
      tokenSupply: "15,000",
      roi: "+28.1%",
      soldPercentage: 45,
      description: "Patent portfolio for innovative blockchain technology"
    },
    {
      id: 6,
      type: "Digital Art",
      image: "/lovable-uploads/f9498d05-6913-4d0f-a7e6-4ccea6672af6.png",
      tokenSupply: "8,000",
      roi: "+31.7%",
      soldPercentage: 95,
      description: "Curated collection of premium digital artworks"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tokenized <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and invest in a diverse portfolio of real-world assets, 
            from precious metals to cutting-edge technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:neon-glow transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* ROI Badge */}
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary">{project.roi}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{project.type}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Token Supply</span>
                    <span className="font-semibold">{project.tokenSupply}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sold</span>
                    <span className="font-semibold">{project.soldPercentage}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${project.soldPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full glass hover:bg-primary/10 border border-primary/50 rounded-lg py-3 font-semibold text-primary hover:neon-glow transition-all duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-primary hover:scale-105 transition-all duration-300 neon-glow px-8 py-4 rounded-lg font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;