const database = require('./database');

export default {
  DATABASE: {
    DATABASE_SYSTEM: database.dialect,
    DB_SERVER_HOST: database.host,
    DB_NAME: database.database,
    DB_USERNAME: database.username,
    DB_USER_PASSWORD: database.password,
    DB_SERVER_PORT: 3306
  },
  DATABASE_URL: 
    `${database.dialect}://${database.username}:${database.password}@${database.host}:${database.port}/${database.database}` || ''
}
