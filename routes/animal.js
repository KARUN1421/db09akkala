var express = require('express'); 
const animal_controller = require('../controllers/animal'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/detail', animal_controller.animal_view_one_Page); 
module.exports = router; 