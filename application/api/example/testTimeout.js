({
  access: 'public',

  // timeout: 4000,

  // queue: {
  //   concurrency: 1,
  //   size: 1,
  //   timeout: 600,
  // },

  async method() {
    await node.timers.promises.setTimeout(6000);

    // Execution time of the invoked worker task included into request timeout
    // await application.invoke({
    //   method: 'lib.invoke1.method1',
    //   args: { exclusive: 'invoked' },
    //   exclusive: true,
    // });

    return { result: 'testTimeout' };
  },
});
