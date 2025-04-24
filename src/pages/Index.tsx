
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ImageGallery from '@/components/ImageGallery';
import ModelInfo from '@/components/ModelInfo';
import Counter from '@/components/Counter';
import SocialEngagement from '@/components/SocialEngagement';
import GenerationModal from '@/components/GenerationModal';
import PurchaseModal from '@/components/PurchaseModal';
import { toast } from "@/components/ui/use-toast";

// Mock data
const modelData = {
  id: '1',
  name: 'Sophia',
  niche: 'Fashion & Lifestyle Model',
  bio: `Sophia is an AI-generated fashion model specializing in contemporary urban styles and lifestyle photography. Her versatile look is perfect for e-commerce, social media campaigns, and editorial content. With an extensive portfolio of poses, outfits, and settings, Sophia brings a consistent yet dynamic presence to any brand.`,
  heroImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
  images: [
    { id: '1', src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop', alt: 'Sophia in casual streetwear', type: 'image' },
    { id: '2', src: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1974&auto=format&fit=crop', alt: 'Sophia in formal attire', type: 'image' },
    { id: '3', src: 'https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?q=80&w=1780&auto=format&fit=crop', alt: 'Sophia portrait', type: 'image' },
    { id: '4', src: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=1971&auto=format&fit=crop', alt: 'Sophia in summer outfit', type: 'image' },
    { id: '5', src: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop', alt: 'Sophia in business casual', type: 'image' },
    { id: '6', src: 'https://images.unsplash.com/photo-1524041255072-7da0525d6b34?q=80&w=1780&auto=format&fit=crop', alt: 'Sophia outdoor photoshoot', type: 'image' },
  ],
  stats: {
    generatedImages: 1200,
    brandCollaborations: 50,
    uniqueStyles: 25,
    creativePrompts: 500
  },
  social: {
    likes: 5200,
    shares: 1100,
    comments: 760
  }
};

const Index = () => {
  const [isGenerationModalOpen, setIsGenerationModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [freeGenerationsLeft, setFreeGenerationsLeft] = useState(2);
  const [maxFreeGenerations] = useState(2);
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  const handleGenerateClick = () => {
    if (freeGenerationsLeft > 0 || isPremiumUser) {
      setIsGenerationModalOpen(true);
    } else {
      setIsPurchaseModalOpen(true);
    }
  };

  const handleGenerate = () => {
    if (!isPremiumUser && freeGenerationsLeft > 0) {
      setFreeGenerationsLeft(freeGenerationsLeft - 1);
      toast({
        title: "Image generated",
        description: `You have ${freeGenerationsLeft - 1} free generations left.`,
        duration: 5000,
      });
    }
  };

  const handlePurchaseComplete = () => {
    setIsPremiumUser(true);
    toast({
      title: "Purchase successful!",
      description: "You now have premium access to generate unlimited images.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          name={modelData.name}
          niche={modelData.niche}
          heroImageSrc={modelData.heroImage}
          onGenerateClick={handleGenerateClick}
          freeGenerationsLeft={freeGenerationsLeft}
          maxFreeGenerations={maxFreeGenerations}
        />
        
        <div className="container mx-auto px-4 py-12">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Model info sidebar - On desktop, this is on the left */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <ModelInfo 
                  name={modelData.name}
                  niche={modelData.niche}
                  bio={modelData.bio}
                  avatarSrc={modelData.avatar}
                />
                
                {/* Social Engagement */}
                <div className="mt-6">
                  <SocialEngagement 
                    likes={modelData.social.likes}
                    shares={modelData.social.shares}
                    comments={modelData.social.comments}
                    isLive={true}
                  />
                </div>
              </div>
            </div>
            
            {/* Gallery - On desktop, this is on the right */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h2 className="text-2xl font-bold font-display mb-6">Generated Content</h2>
              
              <ImageGallery 
                images={modelData.images}
                onGenerateClick={handleGenerateClick}
              />
            </div>
          </div>
          
          {/* Stats Counters */}
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold font-display mb-8 text-center">Model Stats</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Counter 
                end={modelData.stats.generatedImages}
                suffix="+"
                title="Images Generated"
              />
              <Counter 
                end={modelData.stats.brandCollaborations}
                suffix="+"
                title="Brand Uses"
              />
              <Counter 
                end={modelData.stats.uniqueStyles}
                title="Unique Styles"
              />
              <Counter 
                end={modelData.stats.creativePrompts}
                suffix="+"
                title="Creative Prompts"
              />
            </div>
          </div>
        </div>
        
        {/* Generation Modal */}
        <GenerationModal 
          open={isGenerationModalOpen}
          onOpenChange={setIsGenerationModalOpen}
          modelName={modelData.name}
          freeGenerationsLeft={freeGenerationsLeft}
          onGenerate={handleGenerate}
        />
        
        {/* Purchase Modal */}
        <PurchaseModal 
          open={isPurchaseModalOpen}
          onOpenChange={setIsPurchaseModalOpen}
          onPurchaseComplete={handlePurchaseComplete}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
