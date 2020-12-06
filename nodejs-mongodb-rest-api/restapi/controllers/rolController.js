'use strict';

var mongoose = require('mongoose'),
    Rol = mongoose.model('Roles');

exports.roles = function(req, res) {
  Rol.find({}, function(err, rol) {
    if (err)
      res.send(err);
    res.json(rol);
  });
};

exports.add = function(req, res) {
  var new_rol = new Rol(req.body);
  new_rol.save(function(err, rol) {
    if (err)
      res.send(err);
    res.json(rol);
  });
};

exports.getrol = function(req, res) {
  Rol.findById(mongoose.Types.ObjectId(req.query._id), function(err, rol) {
    if (err)
      res.send(err);
    res.json(rol);
  });
};

exports.update = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query._id);
  Rol.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, rol) {
    if (err)
      res.send(err);
    res.json(rol);
  });
};

exports.delete = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query._id);
  Rol.deleteOne({
    _id: id
  }, function(err, rol) {
    if (err)
      res.send(err);
    res.json({ message: 'Rol deleted successfully' });
  });
};
