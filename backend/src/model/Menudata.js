const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

var NewMenuSchema = new Schema({
    menuId  : String,
    menuName : String,
    menuCode : String,
    releaseDate : String,
    description : String,
    price : String,
    imageUrl : String
});

var Menudata = mongoose.model('menu', NewMenuSchema);             

module.exports = Menudata;