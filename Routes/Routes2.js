const express =require('express');
const router2 = express.Router();
const Database = require('../DataBases/database2');


router2.get('/Departement',(req,res)=>{
    Database.find()
    .exec()
    .then(envoi => res.status(200).json(envoi));
})



router2.post('/newDepartement',(req,res)=>{
    console.log('req.body',req.body);
    const db = new Database(req.body);
    db.save((err,db)=>{
        if(err)
        {
            return res.status(500).json(err);
        }
        res.status(201).json(db);
    });
});

module.exports = router2;