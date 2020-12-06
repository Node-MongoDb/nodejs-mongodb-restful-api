"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Schema = new Schema({
  role: {
    type: Number,
    //0-user
    //1-coach
    //2-admin
    //3-superadmin
    //4-root
  },
  role_name: {
    type: String,
    //0-user
    //1-coach
    //2-admin
    //3-superadmin
    //4-root
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Roles", Schema);
