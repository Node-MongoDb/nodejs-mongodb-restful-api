"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Schema = new Schema({
  id: {
    type: String,
  },
  mac: {
    type: String,
    Required: "Se necesita la mac para eviatar disapositivos duplicados.",
  },
  reference: { type: String },
  serial_number: { type: String },
  manufacture: { type: String },
  name: { type: String },
  descripcion: { type: String },
  avatar: { type: String },
  type: { type: String },
  state: { type: String },
  online: { type: String }
});

module.exports = mongoose.model("Devices", Schema);
