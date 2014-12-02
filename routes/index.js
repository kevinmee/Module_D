var express = require('express');
var router = express.Router();
var dbclient = require('../js/dbclient');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/dashboard', function(reg, res){
  res.render('dashboard');
});

router.post('/addTurtle', function(req, res) {
  dbclient.addTurtle(req.body);
  res.redirect('/dashboard');
});



module.exports = router;
