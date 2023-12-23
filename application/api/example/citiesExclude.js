async ({ excludedCity = 'Beijing', maxRows = 3 }) => {
  // Traditional Metasql syntax
  // TODO:

  // Tickplate Metasql query syntax (extended example with all version of params usage)
  const query = db.pg.sql`
    SELECT * FROM "City"
    WHERE "cityId" < ${5} AND "name" <> ${'excludedCity'}
    ORDER BY name
    LIMIT ${maxRows}
  `;
  const data = await query.rows({ excludedCity });

  return { result: 'success', data };
};
