var express = require('express'); 
const animal_controlers= require('../controllers/animal'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', animal_controlers.animal_view_all_Page ); 
module.exports = router; 