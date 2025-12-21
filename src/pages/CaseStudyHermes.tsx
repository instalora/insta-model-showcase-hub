import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Users, Image, Clock, CheckCircle, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/ImageGallery";

const CaseStudyHermes = () => {
  const galleryImages = [
    { id: "1", src: "/cs3/1.jpg", alt: "Emma for Hermès campaign", type: "image" as const },
    { id: "2", src: "/cs3/2.jpg", alt: "Emma luxury styling", type: "image" as const },
    { id: "3", src: "/cs3/3.jpg", alt: "Emma brand content", type: "image" as const },
    { id: "4", src: "/cs3/4.jpg", alt: "Emma product showcase", type: "image" as const },
    { id: "5", src: "/cs3/5.jpg", alt: "Emma lifestyle shot", type: "image" as const },
    { id: "6", src: "/cs3/6.jpg", alt: "Emma UGC content", type: "image" as const },
    { id: "7", src: "/cs3/7.jpg", alt: "Emma UGC content", type: "image" as const },
    { id: "8", src: "/cs3/8.jpg", alt: "Emma UGC content", type: "image" as const },
    { id: "9", src: "/cs3/9.jpg", alt: "Emma UGC content", type: "image" as const },
  ];

  const metrics = [
    { icon: TrendingUp, value: "520%", label: "Engagement Increase" },
    { icon: Users, value: "6.2M", label: "Campaign Reach" },
    { icon: Image, value: "180+", label: "Content Pieces Generated" },
    { icon: Clock, value: "4 days", label: "Time to Launch" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Hermès explored epicTwin's model directory seeking a refined presence for their new collection campaign.",
    },
    {
      step: "02",
      title: "Model Selection",
      description: "They discovered Emma, whose minimalist elegance and sophisticated style perfectly embodied Hermès' timeless aesthetic.",
    },
    {
      step: "03",
      title: "Content Generation",
      description: "Using epicTwin's AI generation tools, they created 180+ unique content pieces featuring Emma with the new collection.",
    },
    {
      step: "04",
      title: "Campaign Launch",
      description: "The UGC content was deployed across premium digital channels, achieving exceptional engagement and brand resonance.",
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
              Luxury Fashion
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              How Hermès Found Their Perfect Model & Created Stunning Campaign Content
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how this iconic luxury house leveraged epicTwin to discover Emma and generate premium content that elevated their brand presence.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                Model Discovery
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                UGC Generation
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                Luxury Campaign
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/wairk2/2.jpg"
                alt="Hermès x Emma Campaign"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <span className="font-bold text-foreground text-xl tracking-widest">HERMÈS</span>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">About Hermès</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Founded in 1837 in Paris, Hermès is one of the world's most prestigious luxury houses, renowned for exceptional craftsmanship and timeless elegance. From their iconic Birkin bags to silk scarves, Hermès represents the pinnacle of French luxury and artisanal excellence.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For their latest collection campaign, Hermès sought to blend their heritage of sophistication with contemporary digital storytelling, requiring a model who could embody both classic elegance and modern minimalism.
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
                Hermès was launching a new collection and faced several challenges:
              </p>
              <ul className="space-y-3">
                {[
                  "Finding a model who could represent timeless luxury and understated elegance",
                  "Creating high-volume content quickly for global digital campaigns",
                  "Maintaining the iconic Hermès aesthetic across diverse content formats",
                  "Reducing traditional production costs while ensuring impeccable quality",
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
            Through epicTwin's model discovery platform, Hermès found Emma, a model whose minimalist streetwear aesthetic, refined presence, and versatile style perfectly aligned with the brand's sophisticated positioning and heritage of elegance.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Using epicTwin's AI-powered content generation tools, the brand created over 180 unique pieces of campaign content featuring Emma, all within just 4 days—a fraction of traditional luxury production timelines.
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
                    src="/wairk2/3.jpg"
                    alt="Emma - Featured Model"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Emma</h3>
                  <p className="text-primary font-medium mb-4">Minimalist Streetwear Muse</p>
                  <p className="text-muted-foreground mb-6">
                    Emma's polished editorial styling and clean aesthetic made her the perfect choice for Hermès' campaign. Her calm palette and confident poses allowed the brand to create premium content that resonated with their discerning global audience.
                  </p>
                  <Link to="/model/emma">
                    <Button className="w-full md:w-auto">
                      View Emma's Profile
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
            A selection of the campaign content created for Hermès featuring Emma in various luxury lifestyle settings.
          </p>
          <div className="max-w-4xl mx-auto">
            <ImageGallery images={galleryImages} showGenerateButton={false} />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-foreground italic mb-6 leading-relaxed">
            "epicTwin revolutionized our approach to digital content. Discovering Emma was exceptional—she embodies the understated elegance that defines Hermès. The AI-generated content matched our exacting standards while dramatically accelerating our production timeline."
          </blockquote>
          <div>
            <p className="font-bold text-foreground">Isabelle Dumont</p>
            <p className="text-muted-foreground">Creative Director, Hermès</p>
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
              Join hundreds of brands already creating stunning visuals with epicTwin AI models.
            </p>
            <Link to="/brands">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyHermes;
