const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://userone:userone@ictakfiles.yrgvf.mongodb.net/LIBRARYAPPANGULAR?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    email  : String,
    uname : String,
    password : String,
  
});

var Userdata = mongoose.model('user', NewUserSchema);             

module.exports = Userdata;