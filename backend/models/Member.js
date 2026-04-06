const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ieltsScore: { type: Number, required: true },
  certificates: [{ type: String }],
  achievements: [{ type: String }],
});

module.exports = mongoose.model('Member', memberSchema);
