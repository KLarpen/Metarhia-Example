async () => {
  if (!context.session.counter) context.session.counter = 1;
  else context.session.counter++;
  await application.invoke({
    method: 'lib.invoke1.method1',
    args: { nonExclusiveCount: context.session.counter },
    exclusive: false,
  });
  return { result: context.session.counter };
};
