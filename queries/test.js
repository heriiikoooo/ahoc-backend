var db_global = require('../connection/db');
var db = db_global.db;

module.exports = {
    testConnection: testConnection,
};

function testConnection(req, res) {
    db.func('test_query', [])
        .timeout(5000)
        .then(function (data) {
            if (data.length > 0) {
                res.status(200)
                    .json({
                        status: 'Success',
                        result: data,
                        message: "Test Connection Success"
                    });
            } else {
                res.status(200)
                    .json({
                        status: 'Failed',
                        result: data,
                        message: "Test Connection Failed"
                    });
            }
        })
        .catch(function (err) {
            console.log('EROOOORRRRR')
            console.log(err)
            res.status(500)
                .json({
                    status: 'Error',
                    result: [],
                    message: err
                });
        });
}