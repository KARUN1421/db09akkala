var express = require('express'); 
const animal_controller = require('../controllers/animal'); 
var router = express.Router(); 
 
// router.get('/delete', animal_controller.animal_delete_Page);
router.get('/detail', animal_controller.animal_view_one_Page);

module.exports = router; 