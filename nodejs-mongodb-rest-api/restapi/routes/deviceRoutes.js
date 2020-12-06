'use strict';

module.exports = function(app) {
    var device = require('../controllers/deviceController');
    app.route('/devices')
        .get(device.devices)
        .post(device.add);
    app.route('/devices/:deviceId')
        .get(device.getdevice)
        .put(device.update)
        .delete(device.delete);
};