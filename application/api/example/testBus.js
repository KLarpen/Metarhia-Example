({
  access: 'public',
  async method() {
    const res = await bus.math.eval({
      expr: '2+3*sqrt(4)',
      precision: 3,
    });
    return { math: res };
  },
});
