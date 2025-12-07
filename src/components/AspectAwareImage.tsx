import React, { useState, useEffect } from 'react';

interface AspectAwareImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AspectAwareImage: React.FC<AspectAwareImageProps> = ({ src, alt, className = '' }) => {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsPortrait(img.height > img.width);
    };
    img.src = src;
  }, [src]);

  if (isPortrait === null) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${isPortrait ? 'h-full w-auto mx-auto' : 'w-full h-auto'} ${className}`}
    />
  );
};

export default AspectAwareImage;
