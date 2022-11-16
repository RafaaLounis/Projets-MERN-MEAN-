const mongoose = require('mongoose');

const ShemaDataBases = new mongoose.Schema({
    departement: String,
    superviseur: String,
    code:String
    
});
module.exports=mongoose.model('departement',ShemaDataBases);