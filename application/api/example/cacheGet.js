({
  access: 'public',

  async method() {
    // Local in-memory cache
    const region = lib.example.cache.get({ key: 'locRegion' });
    console.debug({ cache: lib.example.cache.values });

    // Redis cache
    // const region = await db.redis.get('rdRegion');

    if (!region) return new Error('Not Found', 404);
    return { region };
  },

  returns: {
    region: 'string',
  },
});
