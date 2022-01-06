const mongoose = require('mongoose');
const Sms = require('./sms')
const Contact = require('./contact')
const discussionSchema = mongoose.Schema({
  endPoint: { type: Date, required: true },
  sms: { type: [Number], required: true },
});

module.exports = mongoose.model('Discussion', discussionSchema);