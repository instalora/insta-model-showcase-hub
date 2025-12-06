import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  title: string;
  image: string;
  tags: string[];
  highlightTag?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "fashion-nova",
    title: "Fashion Nova: AI-powered campaign visuals",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
    tags: ["Fashion", "E-commerce", "Social Media"],
    highlightTag: "Featured"
  },
  {
    id: "beauty-brand",
    title: "GlowUp Beauty: Product launch imagery",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
    tags: ["Beauty", "Product Photography"],
    highlightTag: "New"
  },
  {
    id: "fitness-app",
    title: "FitLife: Fitness influencer campaigns",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    tags: ["Fitness", "Lifestyle", "App Marketing"]
  },
  {
    id: "luxury-watches",
    title: "Chronos Watches: Luxury brand content",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    tags: ["Luxury", "Product", "Branding"]
  },
  {
    id: "travel-agency",
    title: "Wanderlust Travel: Destination marketing",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    tags: ["Travel", "Lifestyle", "Social Media"]
  },
  {
    id: "food-delivery",
    title: "TastyBites: Food delivery app visuals",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    tags: ["Food", "App", "Marketing"],
    highlightTag: "Popular"
  },
  {
    id: "tech-startup",
    title: "NexTech: Tech startup branding",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    tags: ["Tech", "Startup", "Branding"]
  },
  {
    id: "wellness-brand",
    title: "ZenMind: Wellness app campaign",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
    tags: ["Wellness", "Health", "Lifestyle"]
  },
  {
    id: "sports-brand",
    title: "Athletic Pro: Sports gear marketing",
    image: "https://images.unsplash.com/photo-1461896836934- voices.jpg?w=800&h=600&fit=crop",
    tags: ["Sports", "E-commerce", "Lifestyle"]
  }
];

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  return (
    <Link 
      to={`/case-study/${study.id}`}
      className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {study.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {study.highlightTag && (
            <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              {study.highlightTag}
            </span>
          )}
          {study.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full mb-6">
            Our work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Explore what you can do with Instalora
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading brands are using AI-generated content to transform their marketing and drive results.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to create your success story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of brands already using Instalora to revolutionize their content creation.
          </p>
          <Link 
            to="/brands"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
