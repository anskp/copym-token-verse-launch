import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "investor"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const socialLinks = [
    { name: "GitHub", icon: "💻", url: "#" },
    { name: "Discord", icon: "💬", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Join the <span className="bg-gradient-primary bg-clip-text text-transparent">Movement</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of the future of asset tokenization. Whether you're an issuer or investor, 
            we're here to help you navigate the new economy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Form */}
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-primary">Get Started Today</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass border-primary/30 focus:border-primary focus:ring-primary/20"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass border-primary/30 focus:border-primary focus:ring-primary/20"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">I am a...</Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: "investor" })}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      formData.role === "investor"
                        ? "border-primary bg-primary/20 text-primary neon-glow"
                        : "border-muted text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    💰 Investor
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: "issuer" })}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      formData.role === "issuer"
                        ? "border-primary bg-primary/20 text-primary neon-glow"
                        : "border-muted text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    🏭 Asset Issuer
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 neon-glow py-3 text-lg font-semibold"
              >
                Join COPYm Platform
              </Button>
            </form>
          </div>

          {/* Right - Community & Links */}
          <div className="space-y-8">
            {/* Community Stats */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Join Our Community</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5,000+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$2.5M+</div>
                  <div className="text-sm text-muted-foreground">Total Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 hover:neon-glow transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Quick Access</h3>
              <div className="space-y-3">
                {[
                  { name: "Documentation", icon: "📚" },
                  { name: "API Reference", icon: "🔧" },
                  { name: "White Paper", icon: "📄" },
                  { name: "Security Audit", icon: "🔒" }
                ].map((link, index) => (
                  <a
                    key={link.name}
                    href="#"
                    className="flex items-center space-x-3 p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;