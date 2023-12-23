({
  caption: 'Get city by ID',
  description:
    'Query to receive details about particular city by it`s identifier.',
  access: 'public',

  parameters: {
    cityId: 'number',
  },

  async method({ cityId }) {
    // Main database access with direct pg driver usage
    const res = await db.geo.pg.query(
      'SELECT "name" FROM "City" WHERE "cityId" = $1',
      [cityId],
    );
    if (res.rows.length === 0) return new Error('Not Found', 404);
    return { name: res.rows[0].name };
  },

  returns: {
    name: 'string',
  },
});
