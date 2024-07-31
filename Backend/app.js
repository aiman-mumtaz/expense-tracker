const express = require('express');
const cors = require('cors');
const {db} = require("./db/db");
const {readdirSync} = require('fs');

require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

// routes
readdirSync('./routes').map((route)=> app.use('/api/v1',require('./routes/'+route)));

const server = () => {
    db();
    app.listen(port,()=>{
        console.log("App listening at port : ",port);
    })
}
server();