const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/developersApplications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;