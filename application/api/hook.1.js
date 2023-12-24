({
  async router({ method, args, verb, headers }) {
    const ip = context.client.ip;
    await node.timers.promises.setTimeout(6000);
    console.log({ method, args, ip, verb, headers });
    return {};
  },
});
