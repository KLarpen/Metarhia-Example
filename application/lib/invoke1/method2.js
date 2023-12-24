async (args) => {
  console.debug('lib.invoke1.method2 START blocking', args);
  console.time('lib.invoke1.method2');
  const long = 6e9;
  let useless = 0;
  for (let i = 0; i < long; i++) useless++;
  console.debug('lib.invoke1.method2 END blocking', args);
  console.timeEnd('lib.invoke1.method2');
  return { hello: 'world', useless };
};
