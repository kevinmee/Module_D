var express = require('express');
var router = express.Router();
var dbclient = require('../js/dbclient');

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('dashboard');
});


router.get('/dashboard', function(reg, res){
  res.render('dashboard');
});

router.post('/addTurtle', function(req, res) {
  dbclient.addTurtle(req, res);
});

router.get('/speciesWeight', dbclient.speciesWeight);
router.get('/speciesAge', dbclient.speciesAge);


module.exports = router;
