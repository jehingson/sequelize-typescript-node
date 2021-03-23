require('dotenv').config()

module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "sequelizetres",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT ||  "mysql",
  port: 3306
}