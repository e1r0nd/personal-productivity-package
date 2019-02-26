const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

exports.getQuote = async (req, res) => {
  const quotes = await Quote.find();
  const max = quotes.length - 1;
  const randomIndex = Math.floor(Math.random() * max);
  const { author, quote } = quotes[randomIndex];

  res.json({ author, quote });
};
