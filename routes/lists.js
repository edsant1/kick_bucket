var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var List = require('../models/list');
var Item = require('../models/item');

router.get('/', function(req, res) {
	var query = List.find({});
	query.where('bucketId', req.query.bucketId);
	query.exec(function(err, lists) {
		res.json(lists);
	});
});

router.post('/', function(req, res) {
	new List({
		time: req.body.time
		bucketId: req.body.bucketId
	}).save(function(err, list) {
		res.json(list);
	});
});

router.put(':id', function(req, res) {
	List.findByIdAndUpdate(
		req.params.id,
			{$set: { time: req.body.time }},
			{ new: true },
			function(err, list) {
				res.json(list);
			}
	);
});

router.delete('/:id', function(req, res) {
	List.findById(req.params.id, function(err, list) {
		list.remove();
		Item.find({ ListId: req.query.id}).remove().exec(function(err, item) {
			res.status(200).send({ success: true });
		});
	});
});

module.exports = router;