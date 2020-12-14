var express = require('express')
var router = express.Router()

/* Controllers */
const treeController = require('../controllers/trees')

/* GET trees listing. */
router.get('/', treeController.getAllTrees)

module.exports = router