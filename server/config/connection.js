const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://negaonka:neha131511@cluster0.9e4kb.mongodb.net/mernshopping?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
