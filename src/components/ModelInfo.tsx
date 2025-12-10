import React, { useState, useEffect } from 'react';
import { Instagram, HeartPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

// TikTok icon component (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.168 11.42c-.135-.742-.43-1.38-.88-1.908-.37-.422-.87-.77-1.48-1.03a4.16 4.16 0 0 0-2.01-.452V9.7c.56.09 1.04.25 1.42.49.44.28.74.64.9 1.1.08.22.14.47.18.73H12.8c-.58 0-1.03.45-1.03 1 0 .55.45 1 1.03 1h1.83c-.06.35-.16.67-.32.96-.32.59-.82 1.02-1.48 1.28-.4.16-.86.24-1.35.24-1.1 0-1.97-.33-2.61-.99-.61-.63-.92-1.5-.92-2.6 0-1.04.32-1.88.95-2.52.63-.64 1.48-.96 2.55-.96V8.3c-1.42 0-2.6.46-3.52 1.36C6.95 10.54 6.5 11.74 6.5 13.2c0 1.48.45 2.66 1.34 3.55.9.9 2.11 1.35 3.64 1.35 1.6 0 2.9-.5 3.87-1.5.87-.9 1.34-2.1 1.34-3.58-.01-.21-.02-.42-.07-.6z" />
  </svg>
);

interface Social {
  platform: 'instagram' | 'tiktok' | 'threads' | 'twitter' | 'youtube';
  url: string;
}

interface ModelInfoProps {
  name: string;
  modelId: string;
  niche: string;
  bio: string;
  avatarSrc?: string;
  socials?: Social[];
}

const ModelInfo: React.FC<ModelInfoProps> = ({ name, modelId, niche, bio, avatarSrc, socials }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteModels') || '[]');
    setIsFavorite(favorites.includes(modelId));
  }, [modelId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteModels') || '[]');
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== modelId);
      toast({
        title: "Removed from favorites",
        description: `${name} has been removed from your favorites.`,
      });
    } else {
      newFavorites = [...favorites, modelId];
      toast({
        title: "Added to favorites",
        description: `${name} has been saved to your favorites.`,
      });
    }
    
    localStorage.setItem('favoriteModels', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };
  const getSocialIcon = (platform: Social['platform']) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'tiktok':
        return <TikTokIcon className="w-5 h-5" />;
      case 'threads':
        return <ThreadsIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-instalora-900 p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        {avatarSrc && (
          <div className="mr-4">
            <img 
              src={avatarSrc} 
              alt={`${name}'s avatar`} 
              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold font-display">{name}</h2>
              {socials && socials.length > 0 && (
                <div className="flex items-center gap-2">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${name}'s ${social.platform}`}
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFavorite}
              className="shrink-0"
              aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
            >
              <HeartPlus
                className={`w-5 h-5 transition-colors ${isFavorite ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              />
            </Button>
          </div>
          <p className="text-instalora-500 dark:text-instalora-400">{niche}</p>
        </div>
      </div>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p className="text-instalora-700 dark:text-instalora-300 leading-relaxed">{bio}</p>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded-full dark:bg-purple-900 dark:text-purple-200">
          #fashion
        </span>
        <span className="text-xs font-medium bg-pink-100 text-pink-800 px-2 py-1 rounded-full dark:bg-pink-900 dark:text-pink-200">
          #commercial
        </span>
        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">
          #portrait
        </span>
      </div>
    </div>
  );
};

export default ModelInfo;
