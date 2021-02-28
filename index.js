const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.json());
let port = process.env.PORT || 3000;

const sitesRoute = require('./routes/sites');
const invRoute = require('./routes/inventory');

app.use('/sites', sitesRoute);
app.use('/inventory', invRoute);


app.get("/",(req,res) => {
    res.send("Hello WOrld");

});



mongoose.connect(process.env.DB_connection,
    { useUnifiedTopology: true},
    ()=>{console.log("connected to mongodb");
})

app.listen(port,() =>{
    console.log('listening on port localhost:'+port);
});

