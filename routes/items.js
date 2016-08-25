var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');

router.get('/', function(req, res, next) {
	var query = Item.find({});
	query.where('listId', req.query.listId);
	query.exec(function(err, items, count) {
		res.json(items);
	});
});

router.post('/', function(req, res, next) {
	new Item({
		name: req.body.name,
		description: req.body.description,
		listId: req.body.listId
	}).save(function(err, item, count) {
		res.json(item);
	});
});

router.delete('/:id', function(req, res) {
	Item.findById(req.params.id, function(err, item) {
		item.remove();
		res.status(200).send({ success: true });
	});
});

module.exports = router;