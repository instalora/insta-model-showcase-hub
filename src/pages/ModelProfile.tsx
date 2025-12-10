import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ImageGallery from '@/components/ImageGallery';
import ModelInfo from '@/components/ModelInfo';
import Counter from '@/components/Counter';
import SocialEngagement from '@/components/SocialEngagement';
import GenerationModal from '@/components/GenerationModal';
import PurchaseModal from '@/components/PurchaseModal';
import ModelCard, { Model as ShowcaseModel } from '@/components/ModelCard';
import { toast } from "@/components/ui/use-toast";

type ApiAssetObject = {
  id?: string | number;
  url?: string;
  src?: string;
  image_url?: string;
  video_url?: string;
  thumbnail_url?: string;
  type?: 'image' | 'video';
  media_type?: 'image' | 'video';
  alt?: string;
};

type ApiAsset = string | ApiAssetObject;

type ApiSocial = {
  platform?: 'instagram' | 'tiktok' | 'threads' | 'twitter' | 'youtube';
  type?: 'instagram' | 'tiktok' | 'threads' | 'twitter' | 'youtube';
  url?: string;
  handle?: string;
  link?: string;
};

type ApiCampaign = {
  id?: string;
  brand?: string;
  title?: string;
  image?: string;
  cover_image_url?: string;
  url?: string;
  link?: string;
};

type ApiModel = {
  id?: string;
  slug?: string;
  name?: string;
  subtitle?: string;
  genres?: string[];
  description?: string;
  cover_image_url?: string;
  avatar_url?: string;
  assets?: ApiAsset[];
  performance_stats?: {
    generated_images?: number;
    brand_collaborations?: number;
    unique_styles?: number;
    creative_prompts?: number;
  };
  likes?: number;
  shares?: number;
  comments?: number;
  socials?: ApiSocial[];
  social_links?: ApiSocial[];
  external_links?: ApiSocial[];
  campaigns?: ApiCampaign[];
  similar_models?: ApiModel[];
  related_models?: ApiModel[];
};

type GalleryImage = { id: string; src: string; alt: string; type: 'image' | 'video' };

type ModelData = {
  id: string;
  name: string;
  niche: string;
  bio: string;
  heroImage: string;
  avatar: string;
  images: GalleryImage[];
  stats: { generatedImages: number; brandCollaborations: number; uniqueStyles: number; creativePrompts: number };
  social: { likes: number; shares: number; comments: number };
  socials?: { platform: 'instagram' | 'tiktok' | 'threads' | 'twitter' | 'youtube'; url: string }[];
  campaigns?: { id: string; brand: string; title: string; image: string; url: string }[];
  similarModels?: ShowcaseModel[];
};

const FALLBACK_IMAGE = 'https://placehold.co/1200x800?text=Model+visual';

const mapAssetsToGallery = (assets: ApiAsset[], modelName: string): GalleryImage[] => {
  return assets
    .map((asset, index) => {
      const normalizedAsset: ApiAssetObject = typeof asset === 'string' ? { url: asset } : asset || {};
      const src =
        normalizedAsset.url ||
        normalizedAsset.image_url ||
        normalizedAsset.thumbnail_url ||
        normalizedAsset.video_url ||
        normalizedAsset.src ||
        '';

      if (!src) return null;

      const type =
        normalizedAsset.type ||
        normalizedAsset.media_type ||
        (normalizedAsset.video_url ? 'video' : 'image') ||
        'image';

      return {
        id: (normalizedAsset.id ?? `asset-${index}`).toString(),
        src,
        alt: normalizedAsset.alt || `${modelName || 'Model'} asset ${index + 1}`,
        type: type === 'video' ? 'video' : 'image',
      };
    })
    .filter((asset): asset is GalleryImage => Boolean(asset?.src));
};

const mapSimilarModels = (models: ApiModel[]): ShowcaseModel[] => {
  return models
    .map((model, index) => {
      const firstAsset = model.assets?.[0];
      const assetCover = typeof firstAsset === 'string' ? firstAsset : firstAsset?.url;
      const coverImage = model.cover_image_url || model.avatar_url || assetCover;

      if (!model.slug && !model.id) return null;

      return {
        id: (model.id || model.slug || `similar-${index}`).toString(),
        slug: (model.slug || model.id || '').toString(),
        name: model.name || 'AI Model',
        title: model.name || 'AI Model',
        categoryName: model.subtitle || (model.genres && model.genres.length ? model.genres[0] : 'Model'),
        coverImageUrl: coverImage || FALLBACK_IMAGE,
        listImageUrl: coverImage || FALLBACK_IMAGE,
        image: coverImage || FALLBACK_IMAGE,
        rating: 4.8,
        audienceCount: model.likes ?? 0,
        likeCount: model.comments ?? 0,
      } as ShowcaseModel;
    })
    .filter((model): model is ShowcaseModel => Boolean(model));
};

const mapApiModelToViewModel = (apiModel: ApiModel, fallbackSlug: string): ModelData => {
  const assets = mapAssetsToGallery(apiModel.assets || [], apiModel.name || 'AI Model');
  const heroImage = apiModel.cover_image_url || assets[0]?.src || apiModel.avatar_url || FALLBACK_IMAGE;
  const avatar = apiModel.avatar_url || assets[1]?.src || heroImage;
  const niche = apiModel.subtitle || (apiModel.genres && apiModel.genres.length ? apiModel.genres.join(' • ') : 'Digital Muse');
  const performance = apiModel.performance_stats || {};

  const socialSources = [
    ...(apiModel.socials || []),
    ...(apiModel.social_links || []),
    ...(apiModel.external_links || []),
  ];

  const socials = socialSources
    .map((social, index) => ({
      platform: social.platform || social.type || 'instagram',
      url: social.url || social.link || social.handle || '#',
      id: index,
    }))
    .filter((social) => Boolean(social.url))
    .map(({ platform, url }) => ({ platform, url }));

  const campaigns = (apiModel.campaigns || [])
    .map((campaign, index) => ({
      id: campaign.id || `campaign-${index}`,
      brand: campaign.brand || 'Featured Brand',
      title: campaign.title || 'Campaign',
      image: campaign.image || campaign.cover_image_url || heroImage,
      url: campaign.url || campaign.link || '#',
    }))
    .filter((campaign) => Boolean(campaign.image));

  const similarModels = mapSimilarModels(apiModel.similar_models || apiModel.related_models || []);

  return {
    id: apiModel.slug || apiModel.id || fallbackSlug || 'model',
    name: apiModel.name || 'AI Model',
    niche,
    bio: apiModel.description || 'Bio coming soon.',
    heroImage,
    avatar,
    images: assets.length ? assets : [
      { id: 'fallback', src: heroImage, alt: `${apiModel.name || 'Model'} hero image`, type: 'image' },
    ],
    stats: {
      generatedImages: performance.generated_images ?? 0,
      brandCollaborations: performance.brand_collaborations ?? 0,
      uniqueStyles: performance.unique_styles ?? 0,
      creativePrompts: performance.creative_prompts ?? 0,
    },
    social: {
      likes: apiModel.likes ?? 0,
      shares: apiModel.shares ?? 0,
      comments: apiModel.comments ?? 0,
    },
    socials: socials.length ? socials : undefined,
    campaigns: campaigns.length ? campaigns : undefined,
    similarModels: similarModels.length ? similarModels : undefined,
  };
};

const ModelProfile = () => {
  const { id } = useParams<{ id: string }>();
  const modelKey = id === 'camilla' ? 'camila' : id;
  const [modelData, setModelData] = useState<ModelData | null>(null);
  const [similarModels, setSimilarModels] = useState<ShowcaseModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isGenerationModalOpen, setIsGenerationModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [freeGenerationsLeft, setFreeGenerationsLeft] = useState(2);
  const [maxFreeGenerations] = useState(2);
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  useEffect(() => {
    if (!modelKey) return;

    const controller = new AbortController();
    const fetchModel = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api-3mtz.onrender.com/v1.0/models/public/${modelKey}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load model (${response.status})`);
        }

        const data: ApiModel = await response.json();
        const mappedModel = mapApiModelToViewModel(data, modelKey);

        setModelData(mappedModel);
        setSimilarModels(mappedModel.similarModels || []);
      } catch (fetchError) {
        if (controller.signal.aborted) return;

        console.error(fetchError);
        setError('Unable to load model right now. Please try again later.');
        setModelData(null);
        setSimilarModels([]);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchModel();

    return () => controller.abort();
  }, [modelKey]);

  const handleGenerateClick = () => {
    if (freeGenerationsLeft > 0 || isPremiumUser) {
      setIsGenerationModalOpen(true);
    } else {
      setIsPurchaseModalOpen(true);
    }
  };

  const handleGenerate = () => {
    if (!isPremiumUser && freeGenerationsLeft > 0) {
      setFreeGenerationsLeft(freeGenerationsLeft - 1);
      toast({
        title: "Image generated",
        description: `You have ${freeGenerationsLeft - 1} free generations left.`,
        duration: 5000,
      });
    }
  };

  const handlePurchaseComplete = () => {
    setIsPremiumUser(true);
    toast({
      title: "Purchase successful!",
      description: "You now have premium access to generate unlimited images.",
      duration: 5000,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16">
          <p className="text-lg text-muted-foreground">Loading model profile...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !modelData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16 px-6">
          <div className="max-w-xl text-center">
            <h1 className="text-2xl font-bold mb-4">Model unavailable</h1>
            <p className="text-muted-foreground">{error || 'We could not load this model. Please try again later.'}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection
          name={modelData.name}
          niche={modelData.niche}
          heroImageSrc={modelData.heroImage}
          onGenerateClick={handleGenerateClick}
          freeGenerationsLeft={freeGenerationsLeft}
          maxFreeGenerations={maxFreeGenerations}
        />

        <div className="container mx-auto px-6 md:px-10 py-12 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <ModelInfo
                  name={modelData.name}
                  modelId={modelData.id}
                  niche={modelData.niche}
                  bio={modelData.bio}
                  avatarSrc={modelData.avatar}
                  socials={modelData.socials}
                />

                <div className="mt-6">
                  <SocialEngagement
                    likes={modelData.social.likes}
                    shares={modelData.social.shares}
                    comments={modelData.social.comments}
                    isLive={true}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <h2 className="text-2xl font-bold font-display mb-6">Generated Content</h2>

              <ImageGallery
                images={modelData.images}
                onGenerateClick={handleGenerateClick}
              />
            </div>
          </div>

          {modelData.campaigns && modelData.campaigns.length > 0 && (
            <div className="mt-16 mb-8">
              <h2 className="text-2xl font-bold font-display mb-8 text-center">Featured Campaigns</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modelData.campaigns.map((campaign) => (
                  <Link
                    key={campaign.id}
                    to={campaign.url}
                    className="group relative overflow-hidden rounded-2xl bg-muted transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-2">
                        {campaign.brand}
                      </span>
                      <h3 className="text-xl font-bold text-white">{campaign.title}</h3>
                      <p className="text-white/70 text-sm mt-1">View case study →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold font-display mb-8 text-center">Model Stats</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              <Counter
                end={modelData.stats.generatedImages}
                suffix="+"
                title="Images Generated"
              />
              <Counter
                end={modelData.stats.brandCollaborations}
                suffix="+"
                title="Brand Uses"
              />
              <Counter
                end={modelData.stats.uniqueStyles}
                title="Unique Styles"
              />
              <Counter
                end={modelData.stats.creativePrompts}
                suffix="+"
                title="Creative Prompts"
              />
            </div>
          </div>

          {similarModels.length > 0 && (
            <div className="mt-16 mb-8">
              <h2 className="text-2xl font-bold font-display mb-8 text-center">Similar Models</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {similarModels
                  .filter((model) => model.slug !== modelData.id)
                  .map((model, index) => (
                    <ModelCard
                      key={model.id}
                      model={model}
                      index={index}
                    />
                  ))}
              </div>
            </div>
          )}

          <div className="mt-16 mb-8">
            <div className="bg-muted rounded-3xl px-8 md:px-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                  Want to be an<br />AI model?
                </h2>
                <Link to="/become-model" className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
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

        <GenerationModal
          open={isGenerationModalOpen}
          onOpenChange={setIsGenerationModalOpen}
          modelName={modelData.name}
          freeGenerationsLeft={freeGenerationsLeft}
          onGenerate={handleGenerate}
        />

        <PurchaseModal
          open={isPurchaseModalOpen}
          onOpenChange={setIsPurchaseModalOpen}
          onPurchaseComplete={handlePurchaseComplete}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ModelProfile;
