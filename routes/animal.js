var express = require('express'); 
const animal_controller = require('../controllers/animal'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/create', animal_controller.animal_create_Page);

module.exports = router; 