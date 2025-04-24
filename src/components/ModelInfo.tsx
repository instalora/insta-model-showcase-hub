
import React from 'react';

interface ModelInfoProps {
  name: string;
  niche: string;
  bio: string;
  avatarSrc?: string;
}

const ModelInfo: React.FC<ModelInfoProps> = ({ name, niche, bio, avatarSrc }) => {
  return (
    <div className="bg-white dark:bg-instalora-900 p-6 rounded-xl shadow-sm">
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
        <div>
          <h2 className="text-2xl font-bold font-display">{name}</h2>
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
