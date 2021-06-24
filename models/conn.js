require('dotenv').config();

const host = process.env.DB_HOST;
const database = process.env.DB_Name;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const pgp = require('pg-promise')({
    query: function (event) {
        console.log("Query:", event.query);
    }
});

const options = {
    host,
    database,
    user,
    password
};

const db = pgp(options);

module.exports = db;