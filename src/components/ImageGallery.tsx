
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Image {
  id: string;
  src: string;
  alt: string;
  type: 'image' | 'video';
  thumbnailSrc?: string;
}

interface ImageGalleryProps {
  images: Image[];
  onGenerateClick: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onGenerateClick }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const goToPreviousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="image-grid w-full">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="relative overflow-hidden rounded-lg aspect-[4/5] bg-instalora-100 dark:bg-instalora-800 cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.thumbnailSrc || image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {image.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.8" />
                  <path d="M15.5 12L10 15.5V8.5L15.5 12Z" fill="black" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-8">
        <Button 
          onClick={onGenerateClick}
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
          Generate Image
        </Button>
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          {selectedImageIndex !== null && (
            <div className="relative">
              {images[selectedImageIndex].type === 'image' ? (
                <img 
                  src={images[selectedImageIndex].src} 
                  alt={images[selectedImageIndex].alt} 
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <video 
                  src={images[selectedImageIndex].src} 
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg"
                />
              )}
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  goToPreviousImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full"
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full"
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
