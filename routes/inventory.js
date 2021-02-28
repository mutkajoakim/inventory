const express = require('express');
const router = express.Router();
const Inv = require('../models/inventory');


router.get("/", async(req,res) => {
    try{
        const inventory = await Inv.find();
        res.json(inventory)
    }catch(err){
        res.json({message : err});
    }
});

router.get('/:productID',(req,res)=>{
    res.send("Here would come info for a specific product");
})
//add new product to database
router.post('/', async (req,res) =>{
    const inventory = new Inv({
        _id: req.body._id,
        location0: req.body.location0,
        location1: req.body.location1,
        location2: req.body.location2
    });
    try{
   const savedInv = await inventory.save();
            res.json(savedInv);
           }catch(err)  {
                res.json({message: err});
           };
});
//modify stock amount of prudct in database
router.patch('/:productID', async (req,res) =>{
    try{
        const updatedProd = await Inv.updateOne({
            _id: req.params.productID},
            {$inc: {location0: -req.body.location0,
                    location1: -req.body.location1,
                    location2: -req.body.location2,}});
          res.json(updatedProd);  
        }catch(err){
            res.json({message: err});
        }
    });




module.exports = router;