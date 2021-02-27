const express = require('express');

const router = express.Router();
var siteID = "placeholder";
router.get("/",(req,res)=> {
    res.send("Here would come warehouse info for all our warehouses.");
});

router.get("/"+siteID,(req,res)=>{
    res.send("Here would come info for a specific site");
})

module.exports = router;