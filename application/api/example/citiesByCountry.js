async ({ countryId }) => {
  // Traditional Metasql syntax
  // const fields = ['cityId', 'name'];
  // const where = { countryId };
  // const data = await db.pg.select('City', fields, where);

  // Knex Query Builder
  /* const data = await db
    .knex('City')
    .select(['cityId', 'name'])
    .where({ countryId }); */

  // Raw query execution
  // https://knexjs.org/guide/raw.html
  const data = await db.knex.raw(
    'SELECT "cityId", "name" FROM "City" WHERE "countryId" = ?',
    [countryId],
  );
  // broken official example https://knexjs.org/guide/query-builder.html#fromraw
  // error: select * from (SELECT * FROM "City" WHERE "countryId" = $1) - subquery in FROM must have an alias
  /* const data = await db.knex
    .select('*')
    .fromRaw('(SELECT * FROM "City" WHERE "countryId" = ?)', countryId); */

  return { result: 'success', data };
};
