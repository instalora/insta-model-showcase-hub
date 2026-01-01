import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModelCard, { Model } from '@/components/ModelCard';
import { Skeleton } from '@/components/ui/skeleton';
import { ApiModel } from '@/types/api';
import { getCachedModel, setCachedModel } from '@/utils/modelCache';
import { useAnalytics } from "@/hooks/use-analytics";

const MODELS_ENDPOINT = 'https://api.epictwin.co/v1.0/models/public';

const Models: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { trackEvent } = useAnalytics();

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
        slug: item.slug || item.id,
        name: item.name || item.title,
        title: item.title,
        categoryName: item.category_name,
        coverImageUrl: item.list_image_url,
        listImageUrl: item.list_image_url,
        image: item.image,
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

  useEffect(() => {
    if (!models.length) return;

    const controller = new AbortController();

    const prefetchModelDetails = async () => {
      for (const model of models) {
        const cacheKey = (model.slug || model.id).toLowerCase();

        if (getCachedModel(cacheKey)) continue;

        try {
          const response = await fetch(`https://api.epictwin.co/v1.0/models/public/${cacheKey}`, {
            signal: controller.signal,
          });

          if (!response.ok) continue;

          const data: ApiModel = await response.json();
          setCachedModel(cacheKey, data);
        } catch (prefetchError) {
          if (controller.signal.aborted) return;
          console.error('Failed to prefetch model details', prefetchError);
        }
      }
    };

    prefetchModelDetails();

    return () => controller.abort();
  }, [models]);

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

          <div className="mt-16">
            <div className="bg-muted rounded-3xl px-8 md:px-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                  Want to be an<br />AI model?
                </h2>
                <Link
                  to="/become-model"
                  className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta_label: "Become a model",
                      destination: "/become-model",
                    })
                  }
                >
                  Become a model
                </Link>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">
                <div className="flex flex-col gap-3 animate-float-down">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    alt="AI model example"
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    alt="AI model example"
                    className="rounded-2xl w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 animate-float-up">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                    alt="AI model example"
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                    alt="AI model example"
                    className="rounded-2xl w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Models;
