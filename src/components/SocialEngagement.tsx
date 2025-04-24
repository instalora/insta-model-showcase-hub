
import React from 'react';

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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor" />
        </svg>
        <span>{formatNumber(likes)}</span>
      </div>
      
      <div className="social-stats">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15 8H9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8Z" fill="currentColor" />
        </svg>
        <span>{formatNumber(shares)}</span>
      </div>
      
      <div className="social-stats">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6ZM17 12V3C17 2.45 16.55 2 16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12Z" fill="currentColor" />
        </svg>
        <span>{formatNumber(comments)}</span>
      </div>
    </div>
  );
};

export default SocialEngagement;
