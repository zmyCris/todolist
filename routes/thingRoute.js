const router = require('koa-router')()

const thingCtrl = require("../controller/thingController")

router.prefix('/thingRouter')

router.get('/',thingCtrl.date)
/**
 * @desc 事件操作
 */
router.post('/addThing',thingCtrl.addThing)
router.post('/deleteThing',thingCtrl.deleteThing)
router.post('/updateThing',thingCtrl.updateThing)
router.get('/findThing',thingCtrl.findThing)
router.post('/changeEdit',thingCtrl.changeEdit)

module.exports = router
