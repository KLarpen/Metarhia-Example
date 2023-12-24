({
  // Try in console: await api.example.remoteMethod({ try: 'invoke blocking' });
  access: 'public',
  method: async ({ ...args }) => {
    console.debug({ remoteMethod: args });
    const res = await application.invoke({
      method: 'lib.invoke1.method2',
      args: { exclusive: args },
      exclusive: true,
    });
    return res;
  },
});
