const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://setyobimantoro:bima1908@cluster.hxsktmi.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;