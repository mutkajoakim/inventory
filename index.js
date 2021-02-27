const express = require("express");
const app = express();
let port = process.env.PORT || 3000;


app.get("/",(req,res) => {
    res.send("Hello WOrld");

});

app.get("/site",(req,res)=> {
    res.send("Here would come warehouse info for all our warehouses.");
});

app.listen(port,() =>{
    console.log('listening on port localhost:'+port);
});