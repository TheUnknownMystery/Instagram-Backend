const { connect } = require('mongoose');
const {
  username,
  password,
} = require('../enviornment-variables/mongoose-env.js');

connect(`mongodb+srv://${username}:${password}@cluster0.tobhoqd.mongodb.net/`);
