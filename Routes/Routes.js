const express =require('express');
const router = express.Router();
const Database = require('../DataBases/database');


//Lire tout les utilisateurs
router.get('/utilisateur',(req,res)=>{
    Database.find()
    .exec()
    .then(envoi => res.status(200).json(envoi));
})

//Lire un etudiant 
router.get('/LireUnutilisateur/:id', function (req, res) {
    Database.findById(req.params.id, function (err, doc) {
        res.send(doc);
    })
})


//ajouter un utilisateur
router.post('/newutilisateur',(req,res)=>{
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

router.delete('/delutilisateur/:id',(req,res)=>{

    const id=req.params.id;

    Database.findByIdAndDelete(id,(err,Database )=>{

        if(err){

            return res.status(500).json(err)
        }

         res.status(202).json({msg:`utilisateur avec id ${Database._id} supprimee`})

    })

})

router.put('/uputilisateur/:id',(req,res)=>{

    const db = req.params.id
    console.log(db)
        Database.findById(db)
    .then(Database=>{
        Database.code=req.body.code;
        Database.nom=req.body.nom;
        Database.prenom=req.body.prenom;
        Database.departement=req.body.departement;

        Database.save()
            .then(()=>res.json('Edition reussi !'))
            .catch(err => res.status(400).json('Error on saving: '+err));
    })
    .catch(err => res.status(400).json('Error with id: ' + err));
});

module.exports = router;