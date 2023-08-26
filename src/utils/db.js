// database connection code here

const mysql = require("mysql");
require("dotenv").config();

// defined connection
let connection = mysql.createConnection({
  // connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

connection.connect();

// async query
connection.query("select now()", (err, rows) => {
  if (err) {
    console.log("connection not successful", err);
  } else {
    console.log("connection successful", rows);
  }
});

// if we want to use promises, you could probably find a module that handles mysql promises (and learn to use it)
// OR we can build our own middleware functions that does it for us.

// basic wrapper prmoise if you just want to convert a callback into a promise
// We'll use this when we do our authorization
connection.queryPromise = (sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// go farther, and if you want to process the results of your promise and return the results
// you want to make a blocking function that always returns err and rows
connection.querySync = async (sql, params) => {
  let promise = new Promise((resolve, reject) => {
    console.log(`executing query, ${sql}`);
    connection.query(sql, params, (err, results) => {
      if (err) {
        console.log(`rejecting`);
        return reject(err);
      } else {
        console.log(`resolving`);
        return resolve(results);
      }
    });
  });
  let results = await promise
    .then((results) => {
      console.log(`results, ${results}`);
      return results;
    })
    .catch((err) => {
      throw err;
    });
  return results;
};

// make connection

module.exports = connection;

// make a note: previous project that had a public folder?
