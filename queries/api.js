var db_global = require('../connection/db');
var db = db_global.db;

module.exports = {
    getTopics               :   getTopics,
    getEventsAndServices    :   getEventsAndServices,
    getTestimonials         :   getTestimonials,
    getPartners             :   getPartners
};

function getTopics(req, res) {
    db.func('get_topics', [])
    .then(function (data) {
        if (data.length > 0) {
            res.status(200)
                .json({
                    status: 'Success',
                    result: data,
                    message: "Record found"
                });
        } else {
            res.status(200)
                .json({
                    status: 'Success',
                    result: [],
                    message: "No record found"
                });
        }
    })
    .catch(function (err) {
        console.log(err)
        res.status(500)
            .json({
                status: 'Error',
                result: [],
                message: err
            });
    });
}


function getEventsAndServices(req, res) {
    db.func('get_events_and_services', [])
    .then(function (data) {
        if (data.length > 0) {
            res.status(200)
                .json({
                    status: 'Success',
                    result: data,
                    message: "Record found"
                });
        } else {
            res.status(200)
                .json({
                    status: 'Success',
                    result: [],
                    message: "No record found"
                });
        }
    })
    .catch(function (err) {
        console.log(err)
        res.status(500)
            .json({
                status: 'Error',
                result: [],
                message: err
            });
    });
}


function getTestimonials(req, res) {
    db.func('get_testimonials', [])
    .then(function (data) {
        if (data.length > 0) {
            res.status(200)
                .json({
                    status: 'Success',
                    result: data,
                    message: "Record found"
                });
        } else {
            res.status(200)
                .json({
                    status: 'Success',
                    result: [],
                    message: "No record found"
                });
        }
    })
    .catch(function (err) {
        console.log(err)
        res.status(500)
            .json({
                status: 'Error',
                result: [],
                message: err
            });
    });
}


function getPartners(req, res) {
    db.func('get_partners', [])
    .then(function (data) {
        if (data.length > 0) {
            res.status(200)
                .json({
                    status: 'Success',
                    result: data,
                    message: "Record found"
                });
        } else {
            res.status(200)
                .json({
                    status: 'Success',
                    result: [],
                    message: "No record found"
                });
        }
    })
    .catch(function (err) {
        console.log(err)
        res.status(500)
            .json({
                status: 'Error',
                result: [],
                message: err
            });
    });
}



