const { connect, connection, connections } = require('mongoose');

/*const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetwork';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/

connect('mongodb://localhost/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
