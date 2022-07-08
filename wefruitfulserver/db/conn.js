const mongoose = require('mongose');

const db = process.env.DATABASE;
monngose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connection Successfull');
}).catch(()=>{
    console.log(e);
})