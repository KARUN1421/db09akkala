var express = require('express'); 
const animal_controller = require('../controllers/animal'); 
var router = express.Router(); 
 
// router.get('/delete', animal_controller.animal_delete_Page);
router.get('/', animal_controller.animal_view_all_Page);

const secured = (req, res, next) => {
    if (req.user){
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  }
router.get('/update', secured, animal_controller.animal_update_Page);
router.get('/create', secured, animal_controller.animal_create_Page);

module.exports = router; 