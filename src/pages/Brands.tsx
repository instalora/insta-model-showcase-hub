import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap, Target, TrendingUp, Users, ImageIcon } from "lucide-react";

const Brands = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Content Creation",
      description: "Generate hundreds of unique images in minutes, not weeks.",
    },
    {
      icon: Target,
      title: "Perfect Brand Fit",
      description: "AI models tailored to your brand aesthetic and target audience.",
    },
    {
      icon: TrendingUp,
      title: "Scale Without Limits",
      description: "Create unlimited variations without additional photoshoot costs.",
    },
    {
      icon: Users,
      title: "Diverse Representation",
      description: "Access models of all backgrounds, styles, and demographics.",
    },
  ];

  const useCases = [
    "E-commerce product photography",
    "Social media campaigns",
    "Marketing materials",
    "Website visuals",
    "Email marketing",
    "Digital advertising",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#E456F4]/10 to-[#A855F7]/10 text-primary rounded-full text-sm font-medium mb-6">
            For Brands & Agencies
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
            AI-Powered Visual Content<br />
            <span className="bg-gradient-to-r from-[#E456F4] to-[#A855F7] bg-clip-text text-transparent">
              At Scale
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Create stunning, on-brand visual content with our AI models. No photoshoots, no scheduling, no limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#E456F4] to-[#A855F7] hover:opacity-90 text-white px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-6 md:px-10 bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Brands Choose Instalora
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-md shadow-black/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#E456F4]/10 to-[#A855F7]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Endless Possibilities
              </h2>
              <p className="text-muted-foreground mb-8">
                From product photography to social campaigns, our AI models deliver professional-quality content for any use case.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                alt="AI generated content example"
                className="rounded-2xl w-full aspect-[3/4] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                alt="AI generated content example"
                className="rounded-2xl w-full aspect-[3/4] object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-[#E456F4] to-[#A855F7] rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Join hundreds of brands already creating stunning visuals with Instalora AI models.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;
