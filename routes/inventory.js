const express = require('express');
const router = express.Router();
const Inv = require('../models/inventory');

//gets all product stock info from the database
router.get("/", async(req,res) => {
    try{
        const inventory = await Inv.find();
        res.json(inventory)
    }catch(err){
        res.json(err.message);
    }
});
//show product stock for one product by ID eg. /inventory/<productID>
router.get('/:prodID', async (req,res)=>{
    try{
     const product = await Inv.findById(req.params.prodID);
     res.json(product);
    }catch(err){
         res.json(err.message);
    }
 });
//add new product to database
//ALL FIELDS ARE REQUIRED
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
                res.json(err.message);
           };
});
/*modify stock amount of prudct in database
 IMPORTANT: a POSITIVE number adds stock to database, and a NEGATIVE number value subtracts stock from the database.
 if you want to leave a value unchanged submit that value as 0
 The stock values can at the moment go below zero
 ALL FIELDS ARE REQUIRED
 
 Example patch request
 
 URL: https://inventory-cloud-native.herokuapp.com/inventory/<productID>

 {
     "location0" : 0, //leaves value unchanged
     "location1" : 1, //adds one to location1
     "location2" : -1 //removes one from location2
 }
  
 */
router.patch('/:productID', async (req,res) =>{
    try{
        const updatedProd = await Inv.updateOne({
            _id: req.params.productID},
            {$inc: {location0: req.body.location0,
                    location1: req.body.location1,
                    location2: req.body.location2,}});
          res.json(updatedProd);  
        }catch(err){
            res.json(err.message);
        }
    });
module.exports = router;