import React, { useState, useEffect, useRef } from 'react';
import { Heart, Lock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';

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

interface ModelCardProps {
  model: Model;
  index: number;
}

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const ModelCard: React.FC<ModelCardProps> = ({ model, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nicheColors: Record<string, string> = {
    Fashion: 'from-brand-pink to-brand-purple',
    Commercial: 'from-blue-500 to-indigo-600',
    Lifestyle: 'from-emerald-500 to-teal-600',
    Fitness: 'from-orange-500 to-red-600',
    Beauty: 'from-brand-purple to-pink-500',
    Tech: 'from-cyan-500 to-blue-600',
    Travel: 'from-amber-500 to-orange-600',
    Food: 'from-rose-500 to-red-500',
  };

  const gradientClass = nicheColors[model.niche] || 'from-brand-pink to-brand-purple';

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl bg-card shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 rounded-none" />
          )}
          <img
            src={model.image}
            alt={model.name}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Niche Tag */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${gradientClass}`}>
              {model.niche}
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold font-display text-foreground mb-1">
            {model.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {model.subtitle}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-brand-pink" />
              <span>{formatNumber(model.likes)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-brand-purple" />
              <span>{model.brandUses}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
              <span>{formatNumber(model.comments)}</span>
            </div>
          </div>

          {/* CTA */}
          <Link to={`/model/${model.id}`}>
            <Button 
              variant="default" 
              className="w-full bg-gradient-to-r from-brand-pink to-brand-purple hover:opacity-90 transition-opacity"
            >
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
