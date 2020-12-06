'use strict';

var mongoose = require('mongoose'),
    Device = mongoose.model('Devices');

exports.devices = function(req, res) {
  Device.find({}, function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};

exports.add = function(req, res) {
  var new_device = new Device(req.body);
  new_device.save(function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};

exports.getdevice = function(req, res) {
  Device.findById(mongoose.Types.ObjectId(req.query._id), function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};

exports.update = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query._id);
  Device.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};

exports.delete = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query._id);
  Device.remove({
    _id: id
  }, function(err, device) {
    if (err)
      res.send(err);
    res.json({ message: 'Device deleted successfully' });
  });
};
