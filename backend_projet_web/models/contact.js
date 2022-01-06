const mongoose = require('mongoose');
const Discussion = require('./discuss');

const contactSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phonenumber: { type: String, required: true },
  discuss:  {endpoint:Date, sms:[{content:String, type_send:Boolean, type_rcept:Boolean, date_send:Date}] },
  profession: { type: String, required: false },
  birthday: { type: Date, required: false },
  idUser:{type:String, required: false}

});

module.exports = mongoose.model('Contact', contactSchema);