async ({ countryId }) => {
  // Traditional Metasql syntax
  // const fields = ['cityId', 'name'];
  // const where = { countryId };
  // const data = await db.pg.select('City', fields, where);

  // Tickplate Metasql query syntax (extended example with JOIN)
  const query = db.pg.sql`
    SELECT c."cityId", c."name", state."name" as "state" FROM "City" as c
    JOIN "Country" as state ON state."countryId" = c."countryId"
    WHERE c."countryId" = ${'id'}
  `;
  console.debug(query.toString());
  const data = await query.rows({ id: countryId });

  return { result: 'success', data };
};
