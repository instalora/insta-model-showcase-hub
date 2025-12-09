import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: string;
  title: string;
  image: string;
  tags: string[];
  highlightTag?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "promod",
    title: "Promod: AI-Generated UGC for Winter Collection",
    image: "/camila/1.jpg",
    tags: ["Fashion", "E-commerce"],
    highlightTag: "Featured"
  },
  {
    id: "iman-cosmetics",
    title: "IMAN Cosmetics: Finding the Perfect Model for Authentic Beauty Content",
    image: "/amara/11.jpg",
    tags: ["Beauty", "Cosmetics", "UGC"],
  },
  {
    id: "pirelli",
    title: "Pirelli: Premium Campaign Content with AI-Powered Model Discovery",
    image: "/wairk1/1.jpg",
    tags: ["Automotive", "Lifestyle", "Premium"],
  },
  {
    id: "hermes",
    title: "Hermès: Luxury Campaign Content with AI-Powered Model Discovery",
    image: "/cs3/1.jpg",
    tags: ["Luxury", "Fashion", "Premium"],
    highlightTag: "New"
  },
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
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-[#E456F4] to-[#A855F7] rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to create your success story?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Join hundreds of brands already using Instalora to revolutionize their content creation.
            </p>
            <Link to="/brands">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
