export type ApiAssetObject = {
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

export type ApiAsset = string | ApiAssetObject;

export type ApiSocial = {
  platform?: 'instagram' | 'tiktok' | 'threads' | 'twitter' | 'youtube';
  type?: 'instagram' | 'tiktok' | 'threads' | 'twitter' | 'youtube';
  url?: string;
  handle?: string;
  link?: string;
};

export type ApiCampaign = {
  id?: string;
  brand?: string;
  title?: string;
  image?: string;
  cover_image?: string;
  cover_image_url?: string;
  summary?: string;
  url?: string;
  link?: string;
};

export type ApiModel = {
  id?: string;
  slug?: string;
  name?: string;
  subtitle?: string;
  genres?: string[];
  description?: string;
  cover_image_url?: string;
  avatar_url?: string;
  assets?: ApiAsset[];
  rating?: number;
  model_stats?: {
    generations?: number;
    brand_used?: number;
    unique_styles?: number;
    prompts?: number;
  };
  performance_stats?: {
    generated_images?: number;
    brand_collaborations?: number;
    unique_styles?: number;
    creative_prompts?: number;
  };
  audience_count?: number;
  like_count?: number;
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
