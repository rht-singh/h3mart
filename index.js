const cluster = require('cluster');
const os = require('os');
const express = require('express');
const dotenv = require('dotenv').config();
const routing = require('./routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./config/config');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/v1',routing);


if(cluster.isMaster){
    for(let i=0; i<os.cpus().length-3; i++){

        cluster.fork();
    }
}
else app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});