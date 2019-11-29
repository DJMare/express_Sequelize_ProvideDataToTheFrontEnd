var express = require('express');
var router = express.Router();
// Require mysql2
const mysql = require('mysql2');
// Require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actors', function(req, res, next) {
  models.actor.findAll({}).then(foundActors => {
    const mappedActors = foundActors.map(actor => ({
      ActorID: actor.actor_id,
      Name: `${actor.first_name} ${actor.last_name}`
    }));
    res.send(JSON.stringify(mappedActors));
  });
});


module.exports = router;
