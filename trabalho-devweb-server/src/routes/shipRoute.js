const router = require('express-promise-router')();

const shipController = require('../controllers/shipController')

router.post('/registerShipType', shipController.registerShipType)
router.post('/registerShip', shipController.registerShip)

//busca
router.get('/getShipTypes', shipController.getShipTypes)
router.get('/getShips', shipController.getShips)

module.exports = router;