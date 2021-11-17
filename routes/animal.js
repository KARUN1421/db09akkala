var express = require('express'); 
const animal_controlers= require('../controllers/animal'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.delete('/animal/:id', animal_controlers.animal_delete); 
module.exports = router; 