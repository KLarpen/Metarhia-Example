({
  host: '0.0.0.0',
  balancer: 8000,
  protocol: 'http',
  ports: [8001],
  nagle: false,
  timeouts: {
    bind: 2000,
    start: 30000,
    stop: 5000,
    request: 7000,
    watch: 1000,
    test: 60000,
  },
  queue: {
    concurrency: 1000,
    size: 2000,
    timeout: 6000,
  },
  scheduler: {
    concurrency: 1,
    size: 1,
    timeout: 1400,
  },
  workers: {
    pool: 1,
    wait: 2000,
    timeout: 3500,
  },
  cors: {
    origin: '*',
  },
});
