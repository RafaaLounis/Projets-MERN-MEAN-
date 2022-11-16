const mongoose = require('mongoose');

const ShemaDataBases = new mongoose.Schema({
    code: String,
    nom: String,
    prenom:String,
    departement: String

});
module.exports=mongoose.model('utilisateur',ShemaDataBases);