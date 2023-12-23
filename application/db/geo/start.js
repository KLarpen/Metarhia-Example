async () => {
  db.geo.pg = new npm.pg.Pool(config.database);
};
