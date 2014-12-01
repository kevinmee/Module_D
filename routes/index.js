var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/dashboard', function(reg, res){
  res.render('dashboard', { title: 'Turtles in the United States'});
});



module.exports = router;
