let PORT = process.env.PORT || 8081;
let connectionString = "mongodb://localhost:27017/";
let dbName = "dbtest_night"; //nombre de BD

module.exports = {
    PORT,
    connectionString,
    dbName,
};