import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Users, Image, Clock, CheckCircle, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const CaseStudyIman = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: "/cs3/1.jpg", alt: "Amara for IMAN Cosmetics campaign" },
    { src: "/cs3/2.jpg", alt: "Amara beauty portrait" },
    { src: "/cs3/3.jpg", alt: "Amara makeup showcase" },
    { src: "/cs3/4.jpg", alt: "Amara product styling" },
    { src: "/cs3/5.jpg", alt: "Amara brand content" },
    { src: "/cs3/6.jpg", alt: "Amara UGC content" },
    { src: "/cs3/7.jpg", alt: "Amara UGC content" },
    { src: "/cs3/8.jpg", alt: "Amara UGC content" },
    { src: "/cs3/9.jpg", alt: "Amara UGC content" },
    { src: "/cs3/10.jpg", alt: "Amara UGC content" },
    { src: "/cs3/11.jpg", alt: "Amara UGC content" },
  ];

  const metrics = [
    { icon: TrendingUp, value: "340%", label: "Engagement Increase" },
    { icon: Users, value: "2.1M", label: "Campaign Reach" },
    { icon: Image, value: "85+", label: "Content Pieces Generated" },
    { icon: Clock, value: "3 days", label: "Time to Launch" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "IMAN Cosmetics explored epicTwin's model directory searching for authentic representation for their new collection.",
    },
    {
      step: "02",
      title: "Model Selection",
      description: "They discovered Amara, whose natural beauty and confident presence perfectly aligned with IMAN's brand values.",
    },
    {
      step: "03",
      title: "Content Generation",
      description: "Using epicTwin's AI generation tools, they created 85+ unique content pieces featuring Amara with the new collection.",
    },
    {
      step: "04",
      title: "Campaign Launch",
      description: "The UGC content was deployed across social channels, achieving record-breaking engagement metrics.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Navigation */}
      <div className="container mx-auto px-6 md:px-10 pt-24 pb-6">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-10 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Beauty & Cosmetics
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              How IMAN Cosmetics Found Their Perfect Model & Created Viral UGC Content
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how this iconic beauty brand leveraged epicTwin to discover Amara and generate authentic content that resonated with their audience.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                Model Discovery
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                UGC Generation
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                Beauty Campaign
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/amara/2.jpg"
                alt="IMAN Cosmetics x Amara Campaign"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Iman_Cosmetics_logo.svg/200px-Iman_Cosmetics_logo.svg.png"
                alt="IMAN Cosmetics Logo"
                className="h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-bold text-foreground">IMAN Cosmetics</span>';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            Campaign Results at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Brand */}
      <section className="container mx-auto px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">About IMAN Cosmetics</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Founded by the legendary supermodel Iman, IMAN Cosmetics has been a pioneering force in inclusive beauty since 1994. The brand was created to address the lack of makeup options for women of color, offering products specifically designed for diverse skin tones.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With a commitment to celebrating beauty in all its forms, IMAN Cosmetics needed content creators who embodied their mission of authentic representation and empowerment.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                IMAN Cosmetics was preparing to launch their new "Radiant Glow" collection and faced several challenges:
              </p>
              <ul className="space-y-3">
                {[
                  "Finding models who authentically represented their diverse customer base",
                  "Creating high-volume UGC content quickly for social media campaigns",
                  "Maintaining brand consistency across multiple content pieces",
                  "Reducing traditional photoshoot costs and timelines",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="container mx-auto px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Through epicTwin's model discovery platform, IMAN Cosmetics found Amara—a model whose natural beauty, confident presence, and authentic style perfectly aligned with the brand's values of empowerment and inclusivity.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Using epicTwin's AI-powered content generation tools, the brand was able to create over 85 unique pieces of UGC content featuring Amara styled with products from the new collection—all within just 3 days.
          </p>
        </div>
      </section>

      {/* Featured Model */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/30 py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
              Featured Model
            </h2>
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src="/amara/5.jpg"
                    alt="Amara - Featured Model"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Amara</h3>
                  <p className="text-primary font-medium mb-4">Beauty & Lifestyle Model</p>
                  <p className="text-muted-foreground mb-6">
                    Amara's natural elegance and authentic presence made her the perfect choice for IMAN Cosmetics' campaign. Her versatility allowed the brand to create diverse content that resonated across all demographics.
                  </p>
                  <Link to="/model/amara">
                    <Button className="w-full md:w-auto">
                      View Amara's Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="container mx-auto px-6 md:px-10 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
          The Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border relative"
            >
              <div className="text-5xl font-bold text-primary/20 absolute top-4 right-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Generated Content Gallery */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Sample Generated Content
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            A selection of the UGC content created for IMAN Cosmetics featuring Amara and the Radiant Glow collection.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
          >
            ✕
          </button>
          {selectedImageIndex !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
                  }}
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(prev => prev !== null ? (prev + 1) % galleryImages.length : null);
                  }}
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Testimonial */}
      <section className="container mx-auto px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-foreground italic mb-6 leading-relaxed">
            "epicTwin transformed our content creation process. Finding Amara was a game-changer—she embodies everything IMAN Cosmetics stands for. The AI-generated content was indistinguishable from traditional photoshoots, and we did it in a fraction of the time."
          </blockquote>
          <div>
            <p className="font-bold text-foreground">Sarah Mitchell</p>
            <p className="text-muted-foreground">Creative Director, IMAN Cosmetics</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/30 py-16">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Brand's Content?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Discover how epicTwin can help you find the perfect models and create authentic UGC content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/models">
              <Button size="lg">Explore Models</Button>
            </Link>
            <Link to="/brands">
              <Button size="lg" variant="outline">
                Solutions for Brands
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyIman;
