const express = require ('express')
const ControllerApi = require ('../controllers/api')

const router = express.Router();

router.post('/api/somar', ControllerApi.Somar)
router.post('/api/sub', ControllerApi.Subtrair)


module.exports = router
