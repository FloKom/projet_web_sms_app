const mongoose = require('mongoose');

const smsSchema = mongoose.Schema({
  content: { type: String, required: true },
  type_send: { type: Boolean, required: true },
  type_rcept: { type: Boolean, required: true },
  date_sent: { type: Date, required: true },
});

module.exports = mongoose.model('Sms', smsSchema);