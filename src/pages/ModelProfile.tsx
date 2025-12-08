
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ImageGallery from '@/components/ImageGallery';
import ModelInfo from '@/components/ModelInfo';
import Counter from '@/components/Counter';
import SocialEngagement from '@/components/SocialEngagement';
import GenerationModal from '@/components/GenerationModal';
import PurchaseModal from '@/components/PurchaseModal';
import ModelCard from '@/components/ModelCard';
import { toast } from "@/components/ui/use-toast";

// Mock data for different models
const modelsData: Record<string, {
  id: string;
  name: string;
  niche: string;
  bio: string;
  heroImage: string;
  avatar: string;
  images: { id: string; src: string; alt: string; type: 'image' | 'video' }[];
  stats: { generatedImages: number; brandCollaborations: number; uniqueStyles: number; creativePrompts: number };
  social: { likes: number; shares: number; comments: number };
  socials?: { platform: 'instagram' | 'tiktok' | 'twitter' | 'youtube'; url: string }[];
}> = {
  'stasy': {
    id: 'stasy',
    name: 'Stasy',
    niche: 'Fashion & Lifestyle Muse',
    bio: `Stasy blends contemporary fashion with relaxed resort vibes, creating versatile visuals for luxury travel, beauty, and lifestyle campaigns. Her warm palette and confident poses fit lookbooks, social launches, and editorial storytelling.`,
    heroImage: '/wairk1/1.jpg',
    avatar: '/wairk1/2.jpg',
    images: [
      { id: '1', src: '/wairk1/1.jpg', alt: 'Stasy sunlit portrait', type: 'image' },
      { id: '2', src: '/wairk1/2.jpg', alt: 'Stasy in resort wear', type: 'image' },
      { id: '3', src: '/wairk1/3.jpg', alt: 'Stasy with warm-toned backdrop', type: 'image' },
      { id: '4', src: '/wairk1/4.jpg', alt: 'Stasy casual lifestyle pose', type: 'image' },
      { id: '5', src: '/wairk1/5.jpg', alt: 'Stasy sitting outdoor lounge', type: 'image' },
      { id: '6', src: '/wairk1/6.jpg', alt: 'Stasy close-up portrait', type: 'image' },
      { id: '7', src: '/wairk1/7.jpg', alt: 'Stasy in neutral ensemble', type: 'image' },
      { id: '8', src: '/wairk1/8.jpg', alt: 'Stasy evening outfit', type: 'image' },
      { id: '9', src: '/wairk1/9.jpg', alt: 'Stasy relaxed pose by window', type: 'image' },
      { id: '10', src: '/wairk1/10.jpg', alt: 'Stasy fashionable street style', type: 'image' },
    ],
    stats: { generatedImages: 1320, brandCollaborations: 84, uniqueStyles: 22, creativePrompts: 540 },
    social: { likes: 100000, shares: 2300, comments: 610 },
    socials: [{ platform: 'instagram', url: 'https://www.instagram.com/wairkstudio/' }]
  },
  'amara': {
    id: 'amara',
    name: 'Amara',
    niche: 'Fitness & Lifestyle Muse',
    bio: `Amara blends athletic focus with lifestyle storytelling inspired by her @justamara.ai community. From track sessions to studio-ready portraits, she creates aspirational visuals that fit activewear launches, wellness brands, and aspirational social campaigns.`,
    heroImage: '/amara/3.jpg',
    avatar: '/amara/5.jpg',
    images: [
      { id: '1', src: '/amara/11.jpg', alt: 'Amara reflective portrait', type: 'image' },
      { id: '2', src: '/amara/2.jpg', alt: 'Amara reflective portrait', type: 'image' },
      { id: '3', src: '/amara/1.jpg', alt: 'Amara outdoor workout', type: 'image' },
      { id: '4', src: '/amara/3.jpg', alt: 'Amara track session', type: 'image' },
      { id: '5', src: '/amara/4.jpg', alt: 'Amara studio portrait', type: 'image' },
      { id: '6', src: '/amara/5.jpg', alt: 'Amara confident close-up', type: 'image' },
      { id: '7', src: '/amara/6.jpg', alt: 'Amara sporty pose', type: 'image' },
      { id: '8', src: '/amara/7.jpg', alt: 'Amara minimalist shoot', type: 'image' },
      { id: '9', src: '/amara/8.jpg', alt: 'Amara creative styling', type: 'image' },
      { id: '10', src: '/amara/9.jpg', alt: 'Amara seated fashion look', type: 'image' },
      { id: '11', src: '/amara/10.jpg', alt: 'Amara in athletic set', type: 'image' },
    ],
    stats: { generatedImages: 1640, brandCollaborations: 68, uniqueStyles: 26, creativePrompts: 820 },
    social: { likes: 98500, shares: 4200, comments: 1300 },
    socials: [{ platform: 'instagram', url: 'https://www.instagram.com/justamara.ai/' }]
  },
  'camila': {
    id: 'camila',
    name: 'Camilla',
    niche: 'AI & Tech Creator',
    bio: `Camilla is a content creator and digital marketing expert focused on AI and tech. She shares AI tools and hacks to make life easier and has been active on social media since around 2012, with notable presence on Instagram and Twitter. Previously based in Las Vegas as a social media marketing specialist, she now collaborates with brands to translate complex technology into relatable stories.`,
    heroImage: '/camila/8.jpg',
    avatar: '/camila/6.jpg',
    images: [
      { id: '1', src: '/camila/1.jpg', alt: 'Camilla sharing AI insights', type: 'image' },
      { id: '2', src: '/camila/2.jpg', alt: 'Camilla with tech-focused aesthetic', type: 'image' },
      { id: '3', src: '/camila/3.jpg', alt: 'Camilla lifestyle portrait', type: 'image' },
      { id: '4', src: '/camila/4.jpg', alt: 'Camilla presenting digital marketing tips', type: 'image' },
      { id: '5', src: '/camila/5.jpg', alt: 'Camilla behind-the-scenes content', type: 'image' },
      { id: '6', src: '/camila/6.jpg', alt: 'Camilla casual outdoor look', type: 'image' },
      { id: '7', src: '/camila/7.jpg', alt: 'Camilla highlighting AI-driven workflows', type: 'image' },
      { id: '8', src: '/camila/8.jpg', alt: 'Camilla highlighting AI-driven workflows', type: 'image' },
      { id: '9', src: '/camila/9.jpg', alt: 'Camilla highlighting AI-driven workflows', type: 'image' },
    ],
    stats: { generatedImages: 1850, brandCollaborations: 95, uniqueStyles: 34, creativePrompts: 720 },
    social: { likes: 1700000, shares: 240000, comments: 18400 },
    socials: [{ platform: 'instagram', url: 'https://www.instagram.com/camillagimenez/' }]
  },
  'emma': {
    id: 'emma',
    name: 'Emma',
    niche: 'Minimalist Streetwear Muse',
    bio: `Emma fuses polished editorial styling with clean streetwear lines, delivering versatile visuals that fit lookbooks, launch campaigns, and premium social content. Her calm palette and confident poses adapt seamlessly from lifestyle to high-fashion briefs.`,
    heroImage: '/wairk2/2.jpg',
    avatar: '/wairk2/3.jpg',
    images: [
      { id: '1', src: '/wairk2/1.jpg', alt: 'Emma city portrait', type: 'image' },
      { id: '2', src: '/wairk2/2.jpg', alt: 'Emma editorial pose', type: 'image' },
      { id: '3', src: '/wairk2/3.jpg', alt: 'Emma close-up portrait', type: 'image' },
      { id: '4', src: '/wairk2/4.jpg', alt: 'Emma leaning against railing', type: 'image' },
      { id: '5', src: '/wairk2/5.jpg', alt: 'Emma monochrome look', type: 'image' },
      { id: '6', src: '/wairk2/6.jpg', alt: 'Emma editorial lighting', type: 'image' },
      { id: '7', src: '/wairk2/7.jpg', alt: 'Emma outdoor portrait', type: 'image' },
      { id: '8', src: '/wairk2/8.jpg', alt: 'Emma studio fashion pose', type: 'image' },
      { id: '9', src: '/wairk2/9.jpg', alt: 'Emma modern streetwear outfit', type: 'image' },
      { id: '10', src: '/wairk2/10.jpg', alt: 'Emma casual seated pose', type: 'image' },
      { id: '11', src: '/wairk2/11.jpg', alt: 'Emma portrait with city backdrop', type: 'image' },
      { id: '12', src: '/wairk2/12.jpg', alt: 'Emma candid smile', type: 'image' },
      { id: '13', src: '/wairk2/13.jpg', alt: 'Emma relaxed outdoor look', type: 'image' },
    ],
    stats: { generatedImages: 1480, brandCollaborations: 102, uniqueStyles: 29, creativePrompts: 610 },
    social: { likes: 240000, shares: 5800, comments: 2400 },
  },
  '1': {
    id: '1',
    name: 'Sophia',
    niche: 'Fashion & Lifestyle Model',
    bio: `Sophia is an AI-generated fashion model specializing in contemporary urban styles and lifestyle photography. Her versatile look is perfect for e-commerce, social media campaigns, and editorial content.`,
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
    stats: { generatedImages: 1200, brandCollaborations: 50, uniqueStyles: 25, creativePrompts: 500 },
    social: { likes: 5200, shares: 1100, comments: 760 },
    socials: [{ platform: 'tiktok', url: 'https://www.tiktok.com/@sophia' }]
  },
  '2': {
    id: '2',
    name: 'Marcus',
    niche: 'Commercial & Corporate',
    bio: `Marcus is a professional AI model designed for corporate and commercial photography. His polished appearance makes him ideal for business campaigns and professional content.`,
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    images: [
      { id: '1', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop', alt: 'Marcus professional headshot', type: 'image' },
      { id: '2', src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop', alt: 'Marcus in business attire', type: 'image' },
      { id: '3', src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop', alt: 'Marcus corporate portrait', type: 'image' },
      { id: '4', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', alt: 'Marcus casual portrait', type: 'image' },
    ],
    stats: { generatedImages: 890, brandCollaborations: 35, uniqueStyles: 18, creativePrompts: 320 },
    social: { likes: 3400, shares: 780, comments: 450 }
  },
  '3': {
    id: '3',
    name: 'Luna',
    niche: 'Beauty & Skincare',
    bio: `Luna specializes in beauty and skincare photography. Her flawless appearance is perfect for cosmetic brands and beauty campaigns.`,
    heroImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    images: [
      { id: '1', src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1780&auto=format&fit=crop', alt: 'Luna beauty portrait', type: 'image' },
      { id: '2', src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1974&auto=format&fit=crop', alt: 'Luna makeup look', type: 'image' },
      { id: '3', src: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1995&auto=format&fit=crop', alt: 'Luna skincare ad', type: 'image' },
      { id: '4', src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1780&auto=format&fit=crop', alt: 'Luna natural beauty', type: 'image' },
    ],
    stats: { generatedImages: 1500, brandCollaborations: 62, uniqueStyles: 30, creativePrompts: 680 },
    social: { likes: 7800, shares: 2100, comments: 920 }
  },
};

const ModelProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [isGenerationModalOpen, setIsGenerationModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [freeGenerationsLeft, setFreeGenerationsLeft] = useState(2);
  const [maxFreeGenerations] = useState(2);
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  const modelData = modelsData[id || '1'] || modelsData['1'];

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
        <HeroSection 
          name={modelData.name}
          niche={modelData.niche}
          heroImageSrc={modelData.heroImage}
          onGenerateClick={handleGenerateClick}
          freeGenerationsLeft={freeGenerationsLeft}
          maxFreeGenerations={maxFreeGenerations}
        />
        
        <div className="container mx-auto px-6 md:px-10 py-12 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <ModelInfo 
                  name={modelData.name}
                  modelId={modelData.id}
                  niche={modelData.niche}
                  bio={modelData.bio}
                  avatarSrc={modelData.avatar}
                  socials={modelData.socials}
                />
                
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
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h2 className="text-2xl font-bold font-display mb-6">Generated Content</h2>
              
              <ImageGallery 
                images={modelData.images}
                onGenerateClick={handleGenerateClick}
              />
            </div>
          </div>
          
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold font-display mb-8 text-center">Model Stats</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
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

          {/* Similar Models Section */}
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold font-display mb-8 text-center">Similar Models</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {Object.values(modelsData)
                .filter(m => m.id !== modelData.id)
                .map((model, index) => (
                  <ModelCard 
                    key={model.id}
                    model={{
                      id: model.id,
                      name: model.name,
                      niche: model.niche.split(' ')[0],
                      subtitle: model.niche,
                      image: model.avatar,
                      likes: model.social.likes,
                      brandUses: model.stats.brandCollaborations,
                      comments: model.social.comments,
                    }}
                    index={index}
                  />
                ))}
            </div>
          </div>

          {/* Become an AI Model Section */}
          <div className="mt-16 mb-8">
            <div className="bg-muted rounded-3xl px-8 md:px-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                  Want to be an<br />AI model?
                </h2>
                <Link to="/become-model" className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
                  Become a model
                </Link>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">
                {/* Left column - girls floating down */}
                <div className="flex flex-col gap-3 animate-float-down">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" 
                    alt="AI model example"
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" 
                    alt="AI model example"
                    className="rounded-2xl w-full aspect-[4/5] object-cover"
                  />
                </div>
                {/* Right column - guys floating up */}
                <div className="flex flex-col gap-3 animate-float-up">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                    alt="AI model example"
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" 
                    alt="AI model example"
                    className="rounded-2xl w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <GenerationModal 
          open={isGenerationModalOpen}
          onOpenChange={setIsGenerationModalOpen}
          modelName={modelData.name}
          freeGenerationsLeft={freeGenerationsLeft}
          onGenerate={handleGenerate}
        />
        
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

export default ModelProfile;
