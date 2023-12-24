async (args) => {
  console.debug('lib.invoke1.method1 START', args);
  await metarhia.metautil.delay(2000);
  console.debug('lib.invoke1.method1 END', args);
  return { hello: 'world' };
};
