var conf = require('config');
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  mongo.connect(conf.db, function(err, db) {
    var col = db.collection('medias');
    col.find({tags: "白味噌"}).sort({time: -1}).limit(30).toArray(function(err, resolute) {
      db.close();
      res.render('index', {
        title: 'お雑煮ぐらむ',
        data: resolute,
        next: 2
      });
    });
  });
});

router.get('/:num', function(req, res, next) {
  mongo.connect(conf.db, function(err, db) {
    var col = db.collection('medias');
    col.find({tags: "白味噌"}).sort({time: -1}).skip((req.params.num - 1)*30).limit(30).toArray(function(err, resolute) {
      db.close();
      res.render('index', {
        title: 'お雑煮ぐらむ',
        data: resolute,
        next: Number(req.params.num) + 1
      });
    });
  });
});

module.exports = router;
