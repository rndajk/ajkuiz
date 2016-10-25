var express = require('express');
var router = express.Router();
//var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_client', { title: 'Express', layout: 'layouts/layout_client'});
});

router.get('/dashboard', function(req, res, next) {
  res.render('index_dashboard', { title: 'Express', layout: 'layouts/layout_server'});
});


module.exports = router;
