import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModelCard from '@/components/ModelCard';
import { Skeleton } from '@/components/ui/skeleton';

interface Model {
  id: string;
  name: string;
  niche: string;
  subtitle: string;
  image: string;
  likes: number;
  brandUses: number;
  comments: number;
}

const initialModels: Model[] = [
  {
    id: '1',
    name: 'Sophia Chen',
    niche: 'Fashion',
    subtitle: 'High-end fashion & luxury brands',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop',
    likes: 5200,
    brandUses: 48,
    comments: 320,
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    niche: 'Commercial',
    subtitle: 'Corporate & business visuals',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    likes: 3800,
    brandUses: 35,
    comments: 210,
  },
  {
    id: '3',
    name: 'Luna Park',
    niche: 'Lifestyle',
    subtitle: 'Wellness & everyday moments',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop',
    likes: 4500,
    brandUses: 52,
    comments: 280,
  },
  {
    id: '4',
    name: 'James Mitchell',
    niche: 'Fitness',
    subtitle: 'Sports & athletic wear',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop',
    likes: 6100,
    brandUses: 61,
    comments: 445,
  },
  {
    id: '5',
    name: 'Emma Laurent',
    niche: 'Beauty',
    subtitle: 'Cosmetics & skincare',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop',
    likes: 7200,
    brandUses: 78,
    comments: 520,
  },
  {
    id: '6',
    name: 'Alex Thompson',
    niche: 'Tech',
    subtitle: 'Tech products & gadgets',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop',
    likes: 2900,
    brandUses: 29,
    comments: 175,
  },
];

const moreModels: Model[] = [
  {
    id: '7',
    name: 'Mia Anderson',
    niche: 'Travel',
    subtitle: 'Adventure & destination content',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop',
    likes: 4100,
    brandUses: 38,
    comments: 290,
  },
  {
    id: '8',
    name: 'David Kim',
    niche: 'Food',
    subtitle: 'Culinary & beverage brands',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop',
    likes: 3200,
    brandUses: 42,
    comments: 198,
  },
  {
    id: '9',
    name: 'Isabella Martinez',
    niche: 'Fashion',
    subtitle: 'Streetwear & urban style',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop',
    likes: 5800,
    brandUses: 55,
    comments: 380,
  },
];

const Models: React.FC = () => {
  const [models, setModels] = useState<Model[]>(initialModels);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMoreModels = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (page === 1) {
        setModels(prev => [...prev, ...moreModels]);
        setPage(2);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    }, 800);
  }, [loading, hasMore, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500
      ) {
        loadMoreModels();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreModels]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Header */}
      <section className="pt-24 pb-12 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Models
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Explore AI-generated influencers available for commercial use.
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {models.map((model, index) => (
              <ModelCard
                key={model.id}
                model={model}
                index={index}
              />
            ))}
            
            {/* Loading Skeletons */}
            {loading && (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={`skeleton-${i}`} className="space-y-4">
                    <Skeleton className="aspect-[3/4] rounded-xl" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </>
            )}
          </div>
          
          {!hasMore && (
            <p className="text-center text-muted-foreground mt-12">
              You've seen all available models
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Models;
