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
//get the info for one specific site by ID eg. /site/location0
router.get('/:siteID', async (req,res)=>{
   try{
    const site = await Site.findById(req.params.siteID);
    res.json(site);
   }catch(err){
        res.json({message: err});
   }
});
//creates a new site (this does not add a new site to the inventory database, as they are not connected)
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
//update the information for one site by ID (all fields are required)
router.patch('/:siteID', async (req,res) =>{
    try{
        const updatedsite = await Site.updateOne({
            _id: req.params.siteID},
            {$set: {address: req.body.address,
                    city: req.body.city,
                    zip: req.body.zip,
                country: req.body.country,}});
          res.json(updatedsite);  
        }catch(err){
            res.json({message: err});
        }
    });


module.exports = router;