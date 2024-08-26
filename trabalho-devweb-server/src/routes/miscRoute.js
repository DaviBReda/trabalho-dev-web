const router = require('express-promise-router')();

const miscController = require('../controllers/miscController')

//registers
router.post('/registerDowntime', miscController.registerDowntime)
router.post('/registerLocation', miscController.registerLocation)
router.post('/registerOperation', miscController.registerOperation)
router.post('/registerProcess', miscController.registerProcess)

//busca
router.get('/getDowntimes', miscController.getDowntimes)
router.get('/getLocations', miscController.getLocations)
router.get('/getOperations', miscController.getOperations)
router.get('/getProcesses', miscController.getProcesses)

module.exports = router;