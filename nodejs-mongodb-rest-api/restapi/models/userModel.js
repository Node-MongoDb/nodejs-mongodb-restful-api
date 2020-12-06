"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Schema = new Schema(
  {
    id: {
      type: Number,
    },
    username: {
      type: String,
      required: "Se requiere un nombre de usuario.",
    },
    email: {
      type: String,
      required: "Se requiere un email.",
    },
    password: {
      type: String,
      required: "Se requiere un password.",
    },
   avatar: {
      type: String,
    },
    role: {
      type: Number,
      //0-user
      //1-superuser
      //2-admin
      //3-superadmin
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    login_count: {
      type: Number,
    },
    online: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", Schema);
