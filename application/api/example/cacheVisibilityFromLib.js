({
  access: 'public',

  method: async () => {
    domain.chat.cacheAccessFromLib();
    return { result: "Look into server's console" };
  },
});
