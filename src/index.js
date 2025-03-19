const express = require('express')
const {serverConfig,Logger}  = require('./config/index.js')
const apiroutes = require('./routes/index.js')

const app = express();

app.use('/api',apiroutes);

app.listen(3000 , ()=>{
    console.log(`Successfully started the PORT : ${3000}`);
    Logger.info('Will not be logged in either transport!');
});


