  const mongoose = require("mongoose");

  const UserSchema = new mongoose.Schema({
      username:{
          type:String,
          required: true,
          trim:true
      },
      email: {
          type: String,
          unique:true,
          required: true,
          trim: true
      },
      password:{
        type: String,
        required: true
      },
      pic: {
          type:String,
          default: "",
      },

  },
  {
    timestamps: true
  });

  module.exports = mongoose.model("User",UserSchema);