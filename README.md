# Inventory Team 1

our inventory api can be found here: https://inventory-cloud-native.herokuapp.com

## GET /inventory
-Returns all items at all locations
## GET /sites
-returns information on all warehouse locations
## GET /sites/(id)
-returns information on specific location
## POST /inventory {"_id":"","location0":Num,"location1":Num,"location2":Num}
-allows creation of new items 
## POST /sites  {"_id":"","address":"","city":"","zip":"","country":""}
-allows creation of new sites  
## PATCH /inventory
-allows changes to be made in current inventory
-The total amount is a virtual value, so it is calculated based on the values on all inventory locations
## PATCH /sites
-allows changes to be made

 IMPORTANT: a POSITIVE number adds stock to database, and a NEGATIVE number value subtracts stock from the database.
 if you want to leave a value unchanged submit that value as 0
 The stock values can at the moment go below zero
 ALL FIELDS ARE REQUIRED
 
 Example patch request to /inventory
 
 URL: https://inventory-cloud-native.herokuapp.com/inventory/<productID>

 {
     "location0" : 0, //leaves value unchanged
     "location1" : 1, //adds one to location1
     "location2" : -1 //removes one from location2
 }
  
