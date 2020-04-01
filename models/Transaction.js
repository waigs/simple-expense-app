const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: [true, "Please add description"]
  },
  amount: {
    type: Number,
    required: [true, "Please add positive or negative number"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
