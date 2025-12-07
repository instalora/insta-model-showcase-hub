import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Creator-First",
      description: "We empower creators to monetize their unique style and reach global brands."
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Cutting-edge technology that generates authentic, brand-ready content at scale."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting creators and brands across continents, cultures, and industries."
    },
    {
      icon: Zap,
      title: "Frictionless",
      description: "A self-serve platform that makes content creation seamless and efficient."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                A content marketplace changing the way you build a brand.
              </h1>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  With so many talented creators and powerful brands spread out across the globe, we set out on a mission to create a self-serve content platform that seamlessly connects the two.
                </p>
                <p>
                  We're laser-focused on this mission and work daily to continue building the most frictionless way for brands to find content creators that match their vision.
                </p>
              </div>
              
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/models">
                  Explore Models <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            {/* Right Images */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=900&fit=crop" 
                  alt="Fashion model in urban setting"
                  className="w-full max-w-md ml-auto rounded-2xl shadow-2xl object-contain"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" 
                  alt="Creative content creator"
                  className="absolute -bottom-8 -left-4 md:left-0 w-40 md:w-52 h-40 md:h-52 rounded-xl shadow-xl border-4 border-background object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-10 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape everything we build and every connection we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-background p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-instalora-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop" 
                  alt="Model in studio"
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop" 
                  alt="Fashion content"
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-instalora-500 font-semibold uppercase tracking-wider text-sm">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Democratizing Content Creation
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe every creator deserves the opportunity to work with amazing brands, and every brand deserves access to diverse, authentic content that resonates with their audience.
              </p>
              <p className="text-lg text-muted-foreground">
                Instalora bridges this gap by leveraging AI to help creators scale their impact and brands to find the perfect match for their vision.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-instalora-500 to-purple-600">
        <div className="container mx-auto px-6 md:px-10 max-w-[1200px] text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of creators and brands already using Instalora to create stunning, authentic content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link to="/become-model">Become a Model</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/brands">For Brands</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
