var express = require('express');
var router = express.Router();
var queries = require('../queries/api');

// API ROUTES 

router.get('/api/topics', queries.getTopics);
router.get('/api/events-and-services', queries.getEventsAndServices);
router.get('/api/testimonials', queries.getTestimonials);
router.get('/api/partners', queries.getPartners);

module.exports = router;
