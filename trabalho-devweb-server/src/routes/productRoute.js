const router = require('express-promise-router')();

const productController = require('../controllers/productController')

router.post('/registerProductType', productController.registerProductType)
router.post('/registerProduct', productController.registerProduct)

//busca
router.get('/getProductTypes', productController.getProductTypes)
router.get('/getProducts', productController.getProducts)

module.exports = router;