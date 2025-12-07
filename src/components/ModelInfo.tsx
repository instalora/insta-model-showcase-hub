import React from 'react';
import { Instagram } from 'lucide-react';

// TikTok icon component (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface Social {
  platform: 'instagram' | 'tiktok' | 'twitter' | 'youtube';
  url: string;
}

interface ModelInfoProps {
  name: string;
  niche: string;
  bio: string;
  avatarSrc?: string;
  socials?: Social[];
}

const ModelInfo: React.FC<ModelInfoProps> = ({ name, niche, bio, avatarSrc, socials }) => {
  const getSocialIcon = (platform: Social['platform']) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'tiktok':
        return <TikTokIcon className="w-5 h-5" />;
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
