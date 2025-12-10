
import React from 'react';
import { UserRound, ThumbsUp, Star } from 'lucide-react';


interface SocialEngagementProps {
  likes: number;
  shares: number;
  comments: number;
  isLive?: boolean;
}

const SocialEngagement: React.FC<SocialEngagementProps> = ({ 
  likes, 
  shares, 
  comments, 
  isLive = true 
}) => {
  // Format numbers with k for thousands, M for millions
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  if (!isLive) {
    return (
      <div className="flex justify-center mt-4">
        <span className="text-sm text-instalora-500 bg-instalora-100 px-3 py-1 rounded-full dark:bg-instalora-800 dark:text-instalora-300">
          Social stats coming soon
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      <div className="social-stats">
        <UserRound
          className={`w-5 h-5 transition-colors text-muted-foreground`}
        />
        <span>{formatNumber(likes)}</span>
      </div>
      
      <div className="social-stats">
        <ThumbsUp
          className={`w-5 h-5 transition-colors text-muted-foreground`}
        />
        <span>{formatNumber(shares)}</span>
      </div>
      
      <div className="social-stats">
        <Star
          className={`w-5 h-5 transition-colors text-muted-foreground`}
        />
        <span>{formatNumber(comments)}</span>
      </div>
    </div>
  );
};

export default SocialEngagement;
