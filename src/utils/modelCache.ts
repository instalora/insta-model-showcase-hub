import { ApiModel } from '@/types/api';

const modelDetailCache = new Map<string, ApiModel>();

export const getCachedModel = (key?: string | null) => {
  if (!key) return undefined;
  return modelDetailCache.get(key.toLowerCase());
};

export const setCachedModel = (key: string, model: ApiModel) => {
  if (!key) return;
  modelDetailCache.set(key.toLowerCase(), model);
};

export const hasCachedModel = (key?: string | null) => {
  if (!key) return false;
  return modelDetailCache.has(key.toLowerCase());
};
