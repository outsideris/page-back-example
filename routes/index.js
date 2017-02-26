var express = require('express');
var router = express.Router();

router.get('/detail/:num', function(req, res, next) {
  res.render('detail', {num: req.params.num});
});

router.get('/link/:page', function(req, res, next) {
  const list = [1,2,3,4,5,6,7,8,9,10];
  const page = req.params.page.slice(4);
  const data = list.map((l) => {
    var id = l + (list.length * (page - 1));
    return {
      id: id,
      title: `제목 ${id}`
    };
  });
  res.render('link', {list: data, page: page});
});

router.get('/ajax', function(req, res, next) {
  res.render('ajax', {page: 1});
});

router.get('/hash', function(req, res, next) {
  res.render('hash', {page: 1});
});

router.get('/pushstate/:page', function(req, res, next) {
  const list = [1,2,3,4,5,6,7,8,9,10];
  const page = req.params.page.slice(4);
  const data = list.map((l) => {
    var id = l + (list.length * (page - 1));
    return {
      id: id,
      title: `제목 ${id}`
    };
  });
  res.format({
    'text/html': function() {
      res.render('pushstate', {list: data, page: page});
    },
    'application/json': function() {
      res.json({list: data, page: page});
    }
  })
});

router.get('/pages/:num', function(req, res, next) {
  const list = [1,2,3,4,5,6,7,8,9,10];
  const data = list.map((l) => {
    var id = l + (list.length * (req.params.num - 1));
    return {
      id: id,
      title: `제목 ${id}`
    };
  });
  setTimeout(function() {
    res.json({ list: data, page: req.params.num });
  }, 400);
});

module.exports = router;
