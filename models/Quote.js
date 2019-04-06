const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const quoteSchema = new mongoose.Schema({
  author: {
    type: String,
    trim: true,
    default: 'unknown',
  },
  quote: {
    type: String,
    minlength: 1,
    trim: true,
    required: 'Please enter a quote!',
  },
});

// Define our indexes
quoteSchema.index({
  author: 'text',
  quote: 'text',
});

module.exports = mongoose.model('Quote', quoteSchema);
