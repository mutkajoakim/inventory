const express = require('express');

const router = express.Router();
productID = "placeholder";
router.get("/",(req,res)=> {
    res.send("List of full stock count.");
});

router.get("/"+productID,(req,res)=>{
    res.send("Here would come info for a specific product");
})

module.exports = router;