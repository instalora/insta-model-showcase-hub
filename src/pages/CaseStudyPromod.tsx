import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyPromod: React.FC = () => {
  const metrics = [
    { label: "Content Cost Reduction", value: "73%", icon: TrendingUp },
    { label: "Time to Market", value: "5 days", icon: Clock },
    { label: "UGC Assets Generated", value: "150+", icon: Sparkles },
    { label: "Campaign Reach", value: "2.4M", icon: Users },
  ];

  const challenges = [
    "Finding diverse models that align with brand identity for their new winter collection",
    "High costs and long timelines for traditional photoshoots across multiple locations",
    "Need for authentic UGC-style content that resonates with younger audiences",
    "Maintaining consistent brand aesthetics across all generated content"
  ];

  const solutions = [
    "Matched Promod with AI models that perfectly fit their brand aesthetic and collection style",
    "Generated over 150 high-quality UGC-style images featuring the new winter collection",
    "Created authentic lifestyle content showcasing products in real-world settings",
    "Delivered campaign-ready assets in just 5 days instead of traditional 6-week timeline"
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1485968579169-a6b287d43f5d?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=800&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <Link 
          to="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              Featured
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              Fashion
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              E-commerce
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              UGC Content
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Promod: Transforming Winter Collection Launch with AI-Generated UGC Content
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            How the iconic French fashion brand discovered the perfect AI model and generated 150+ authentic content pieces for their new collection campaign.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&h=700&fit=crop"
              alt="Promod Winter Collection Campaign"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                  <span className="text-xl font-bold text-black">P</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Promod</h3>
                  <p className="text-white/80 text-sm">French Fashion Retailer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            Campaign Results at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Brand */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            About Promod
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Promod is a renowned French fashion retailer known for its feminine, trendy, and accessible clothing collections. With over 500 stores across 40+ countries, Promod has been a staple in women's fashion for decades, constantly evolving to meet the needs of modern consumers who value style, quality, and authenticity.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              For their Winter 2024 collection launch, Promod sought a fresh approach to content creation that would resonate with their diverse, style-conscious audience while reducing traditional photoshoot costs and timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 text-sm font-medium bg-destructive/10 text-destructive rounded-full mb-4">
                The Challenge
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Finding the Right Models for a New Era of Content
              </h2>
              <p className="text-muted-foreground mb-8">
                Promod's marketing team faced mounting pressure to produce more content, faster, while maintaining the authentic and relatable aesthetic their customers love.
              </p>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=700&fit=crop"
                alt="Fashion retail challenge"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=700&fit=crop"
                alt="Instalora AI solution"
                className="rounded-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                The Solution
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                AI-Powered Model Discovery & UGC Generation
              </h2>
              <p className="text-muted-foreground mb-8">
                Instalora provided Promod with an end-to-end solution that transformed their content creation workflow.
              </p>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
              The Process
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              From Brief to Campaign in 5 Days
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              { day: "Day 1", title: "Model Discovery & Selection", description: "Promod browsed our AI model catalog and selected 3 models that perfectly matched their brand's aesthetic — diverse, approachable, and fashion-forward." },
              { day: "Day 2", title: "Collection Upload & Brief", description: "The team uploaded their winter collection pieces and provided style direction, mood boards, and specific shot requirements." },
              { day: "Day 3-4", title: "AI Content Generation", description: "Instalora generated 150+ unique images featuring the selected AI models wearing the new collection in various lifestyle settings." },
              { day: "Day 5", title: "Review & Delivery", description: "Promod reviewed the generated content, requested minor adjustments, and received final campaign-ready assets." },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{step.day}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generated Content Gallery */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
              The Results
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sample Generated Content
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of AI-generated UGC content created for Promod's winter collection campaign.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] rounded-xl overflow-hidden bg-muted group">
                <img
                  src={image}
                  alt={`Promod campaign image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-white mx-auto mb-8 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-primary">P</span>
          </div>
          <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
            "Instalora completely transformed how we approach content creation. We found the perfect model for our brand identity and generated a full campaign's worth of authentic, beautiful content in less than a week. The cost savings are incredible, but the quality is what truly impressed us."
          </blockquote>
          <div>
            <p className="font-semibold text-foreground">Marie Dubois</p>
            <p className="text-muted-foreground">Head of Digital Marketing, Promod</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to transform your content creation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join brands like Promod and discover how Instalora can revolutionize your marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/brands"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </Link>
            <Link 
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyPromod;