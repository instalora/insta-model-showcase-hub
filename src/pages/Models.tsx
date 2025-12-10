import React, { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModelCard, { Model } from '@/components/ModelCard';
import { Skeleton } from '@/components/ui/skeleton';

interface ApiModel {
  id: string;
  cover_image_url: string;
  slug: string;
  name: string;
  category_name: string;
  rating: number;
  audience_count: number;
  like_count: number;
}

const MODELS_ENDPOINT = 'https://api-3mtz.onrender.com/v1.0/models/public';

const Models: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchModels = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(MODELS_ENDPOINT);

      if (!response.ok) {
        throw new Error(`Failed to fetch models: ${response.status}`);
      }

      const data = await response.json();
      const items = Array.isArray(data.items) ? (data.items as ApiModel[]) : [];
      const mappedModels: Model[] = items.map((item) => ({
        id: item.id,
        slug: item.slug,
        name: item.name,
        categoryName: item.category_name,
        coverImageUrl: item.cover_image_url,
        rating: item.rating,
        audienceCount: item.audience_count,
        likeCount: item.like_count,
      }));

      setModels(mappedModels);
    } catch (err) {
      console.error(err);
      setError('Unable to load models right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Models
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Explore AI-generated influencers available for commercial use.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[1200px] mx-auto">
          {error && (
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 text-destructive p-4 mb-6">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {models.map((model, index) => (
              <ModelCard
                key={model.id}
                model={model}
                index={index}
              />
            ))}

            {loading && (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={`skeleton-${i}`} className="space-y-4">
                    <Skeleton className="aspect-[3/4] rounded-xl" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </>
            )}
          </div>

          {!loading && models.length === 0 && !error && (
            <p className="text-center text-muted-foreground mt-12">
              No models available right now. Please check back soon.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Models;
