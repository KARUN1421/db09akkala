var express = require('express'); 
const animal_controller = require('../controllers/animal'); 
var router = express.Router(); 
 
// router.get('/delete', animal_controller.animal_delete_Page);
router.get('/', animal_controller.animal_view_all_Page);
router.get('/update', animal_controller.animal_update_Page);

module.exports = router; 