async () => {
  if (!config.examples.cache) return;
  console.debug({ cache: lib.example.cache.values });
  console.debug('Stop example');
};
