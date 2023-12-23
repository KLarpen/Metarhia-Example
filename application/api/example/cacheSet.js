({
  access: 'public',

  parameters: {
    region: 'string',
  },

  async method({ region }) {
    // Local in-memory cache
    lib.example.cache.set({ key: 'locRegion', val: region });

    // Redis cache
    // await db.redis.set('rdRegion', ` ${region} Redis`);

    return { result: true };
  },
});
