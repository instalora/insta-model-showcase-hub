
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  name: string;
  niche: string;
  heroImageSrc: string;
  onGenerateClick: () => void;
  freeGenerationsLeft: number;
  maxFreeGenerations: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  name, 
  niche, 
  heroImageSrc, 
  onGenerateClick, 
  freeGenerationsLeft,
  maxFreeGenerations
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Animation on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Sticky CTA on scroll
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Hero image with zoom effect */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
          style={{ backgroundImage: `url(${heroImageSrc})` }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className={`relative z-10 h-full flex flex-col justify-center items-center text-white px-4 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            {name}
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-center mb-8 max-w-2xl">
            {niche}
          </p>
          
          <Button
            onClick={onGenerateClick}
            size="lg"
            className="bg-white text-instalora-900 hover:bg-instalora-100 font-medium py-2 px-8 rounded-lg transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl"
          >
            Generate Image
            {freeGenerationsLeft > 0 && (
              <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                {freeGenerationsLeft}/{maxFreeGenerations} free
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Sticky CTA */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 bg-instalora-800/95 backdrop-blur-sm py-4 px-4 z-50 shadow-lg transform transition-transform duration-300 border-t border-instalora-700">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h3 className="text-white font-medium text-lg">{name}</h3>
              {freeGenerationsLeft > 0 ? (
                <p className="text-instalora-300 text-sm">
                  {freeGenerationsLeft} free generations left
                </p>
              ) : (
                <p className="text-instalora-300 text-sm">
                  Upgrade to generate more images
                </p>
              )}
            </div>
            <Button 
              onClick={onGenerateClick}
              className="bg-white text-instalora-900 hover:bg-instalora-100"
            >
              Generate Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
