async () => {
  db.knex = npm.knex({
    client: 'pg',
    connection: config.database,
    debug: true,
  });
};
