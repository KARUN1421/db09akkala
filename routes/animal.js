var express = require('express'); 
const animal_controller = require('../controllers/animal'); 
var router = express.Router(); 
 
router.get('/delete', animal_controller.animal_delete_Page);

module.exports = router; 