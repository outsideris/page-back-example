var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/basic', function(req, res, next) {
  res.render('basic');
});

router.get('/pages/:num', function(req, res, next) {
  const list = [1,2,3,4,5,6,7,8,9,10];
  const data = list.map((l) => {
    return `제목 ${l + (list.length * (req.params.num - 1))}`;
  });
  setTimeout(function() {
    res.json({ list: data });
  }, 500);
});

module.exports = router;
