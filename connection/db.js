var promise = require("bluebird");
const dotenv = require("dotenv");
dotenv.config();

var options = {
    // Initialization Options
    promiseLib: promise
};


var pgp = require('pg-promise')(options);
var connectionString = 'postgres://'+ process.env.DB_USER +':'+ process.env.DB_PASSWORD +'@'+ process.env.HOST_PROD +':'+ process.env.DB_PORT +'/'+process.env.DB_NAME+'?ssl=true';
var db = pgp(connectionString);


module.exports = {
    pgp, db
};