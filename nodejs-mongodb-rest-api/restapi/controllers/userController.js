'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.add = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.getuser = function(req, res) {
  User.findById(mongoose.Types.ObjectId(req.query._id), function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query._id);
  User.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query._id);
  User.remove({
    _id: id
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User deleted successfully' });
  });
};
