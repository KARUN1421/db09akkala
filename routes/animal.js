var express = require('express'); 
const animal_controller = require('../controllers/animal'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/update', animal_controller.animal_update_Page);

module.exports = router; 