const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_name: String,
    password: String,
    email_id: String
});

const user = module.exports = mongoose.model('user', userSchema, 'users');

module.exports.authenticate = function(user_name, password, callback){
    const query = { user_name : user_name, password: password };
    user.findOne(query, callback);
};