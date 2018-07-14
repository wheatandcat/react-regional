const caches: { [key: string]: any } = {};

export interface CacheInterface {
  getCache: (key: string) => any;
  setCache: (key: string, value: any) => void;
}

export default class Cache implements CacheInterface {
  getCache = (key: string) => {
    const value = caches[key];
    if (value) {
      return value;
    }

    return null;
  };

  setCache = (key: string, value: any) => {
    caches[key] = value;
  };
}
