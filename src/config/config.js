module.exports = {
  // ---------- database connection info ----------
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_NAME: process.env.DB_NAME || 'database_name',
  DB_PASSWORD: process.env.DB_PASSWORD || 'database_password',
  DB_USERNAME: process.env.DB_USERNAME || 'database_username',

  // ---------- database tables ----------
  GAMES_TABLE: process.env.GAMES_TABLE || 'table',

  // ---------- server info ----------
  PORT: process.env.PORT || 8000,
};
