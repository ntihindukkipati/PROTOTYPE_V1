var express = require('express');
var router = express.Router();
var Procedures = require('../models/Procedures.js');

/* GET ALL CUSTOMERS */
router.get('/', function (req, res, next) {
  Procedures.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE CUSTOMER BY ID */
router.get('/:id', function (req, res, next) {
  Procedures.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CUSTOMER */
router.post('/', function (req, res, next) {
  console.log('inside post');
  Procedures.create(req.body, function (err, post) {
    console.log('post', req.body);
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CUSTOMER */
router.put('/:id', function(req, res, next){
  Procedures.findByIdAndUpdate(req.params.id, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
/* DELETE CUSTOMER */
router.delete('/:id', function(req, res, next){
  Procedures.findByIdAndDelete(req.params.id, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
module.exports = router;
