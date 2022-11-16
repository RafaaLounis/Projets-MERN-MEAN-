const express =require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
const mongoose = require('mongoose');
const router = require('./Routes/Routes');
const {route} = require('./Routes/Routes');
const connection = mongoose.connection;
const PORT = 3192;

const Routes = require('./Routes/Routes');
//section 2
const router2 = require('./Routes/Routes2');
const {route2} = require('./Routes/Routes2');
const Routes2 = require('./Routes/Routes2');
const cors = require ('cors');

//localhost:3192

app.use(cors());


app.post('/etudiant',(req,res)=>{
    console.log(req.body);
});

app.post('/departement',(req,res)=>{
    console.log(req.body);
});

app.use('/Routes',Routes);
app.use('/Routes2',Routes2);


//mongoose.connect('mongodb://RafaaLM:12345@10.30.40.121:27017/RafaaLM',{ useNewUrlParser: true } );

mongoose.connect('mongodb://localhost:27017/bdlabo7',{ useNewUrlParser: true });

app.listen(PORT,()=>{

    console.log('Affichier sur le Port 3192 ')
});

connection.once('open',()=>{
    console.log('Connected to MongoDB');
});

