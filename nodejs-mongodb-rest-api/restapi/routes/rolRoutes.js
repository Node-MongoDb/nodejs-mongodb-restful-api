'use strict';

module.exports = function(app) {
    var rol = require('../controllers/rolController');
    app.route('/roles')
        .get(rol.roles)
        .post(rol.add);
    app.route('/roles/:rolId')
        .get(rol.getrol)
        .put(rol.update)
        .delete(rol.delete);
};