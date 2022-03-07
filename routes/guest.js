const express = require('express');

const router = express.Router(); //vous permet de créer des routeurs séparés pour chaque route principale de votre application

const guestCntr = require('../controllers/guest')


router.post('/', guestCntr.createGuest);
    
router.get('/', guestCntr.getAllGuest);
    
router.get('/:id', guestCntr.getOneGuest);
    
router.put('/:id', guestCntr.modifyGuest);
    
router.delete('/:id', guestCntr.deleteGuest);



module.exports = router;