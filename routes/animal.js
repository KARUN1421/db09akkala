var express = require('express'); 
const animal_controlers= require('../controllers/animal'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.put('/animal/:id', animal_controlers.animal_update_put); 
module.exports = router; 