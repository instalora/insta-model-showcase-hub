import React, { useEffect, useRef, useState } from 'react';
import { Heart, Star, UserRound } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';

export interface Model {
  id: string;
  slug: string;
  name: string;
  title: string;
  categoryName: string;
  coverImageUrl: string;
  listImageUrl: string;
  image: string;
  rating: number;
  audienceCount: number;
  likeCount: number;
}

interface ModelCardProps {
  model: Model;
  index: number;
}

const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  }
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
    Editorial: 'from-indigo-500 to-purple-600',
    Portraits: 'from-sky-500 to-cyan-600',
  };

  const gradientClass = nicheColors[model.categoryName] || 'from-brand-pink to-brand-purple';
  const cardImage = model.listImageUrl || model.coverImageUrl || model.image;
  const heading = model.name;
  const description = model.title;

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        to={`/model/${model.slug}`}
        className="group block h-full"
      >
        <div className="relative overflow-hidden rounded-xl bg-card shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          <div className="relative aspect-[3/4] overflow-hidden">
            {!imageLoaded && (
              <Skeleton className="absolute inset-0 rounded-none" />
            )}
            <img
              src={cardImage}
              alt={heading}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${gradientClass}`}>
                {model.categoryName}
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="p-5">
            <h3 className="text-xl font-bold font-display text-foreground mb-1">
              {heading}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {description}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <UserRound className="w-4 h-4 text-brand-purple" />
                <span>{formatNumber(model.audienceCount)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-brand-purple" />
                <span>{formatNumber(model.likeCount)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-brand-purple" />
                <span>{model.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ModelCard;
