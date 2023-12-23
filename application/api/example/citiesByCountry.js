async ({ countryId }) => {
  // Traditional Metasql syntax
  // const fields = ['cityId', 'name'];
  // const where = { countryId };
  // const data = await db.pg.select('City', fields, where);

  // Knex Query Builder
  const data = await db
    .knex('City')
    .select(['cityId', 'name'])
    .where({ countryId });

  return { result: 'success', data };
};
