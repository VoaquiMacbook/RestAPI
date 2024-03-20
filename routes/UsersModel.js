const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const UsersModel = new Scheme({
    name: {type: String},
   
},{
    timestamps: true
})
module.exports = mongoose.model('user', UsersModel);