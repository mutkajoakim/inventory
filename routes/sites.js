const express = require('express');
const router = express.Router();
const Site = require('../models/site');

router.get("/", async(req,res) => {
    try{
        const site = await Site.find();
        res.json(site)
    }catch(err){
        res.json({message : err});
    }
});

router.get('/:siteID',(req,res)=>{
    res.send("Here would come info for a specific site");
});

router.post('/', async (req,res) =>{
    const site = new Site({
        _id: req.body._id,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country
    });
    try{
   const savedSite = await site.save();
            res.json(savedSite);
           }catch(err)  {
                res.json({message: err});
           };
});


module.exports = router;