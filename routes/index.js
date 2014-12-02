var express = require('express');
var router = express.Router();
var dbclient = require('../js/dbclient');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/dashboard', function(reg, res){
  res.render('dashboard', { title: 'Turtles in the United States'});
});

router.post('/addTurtle', function(req, res) {
  dbclient.addTurtle(req.body);
  res.render('dashboard', {title: 'Turtles in the United States'});
});



module.exports = router;
