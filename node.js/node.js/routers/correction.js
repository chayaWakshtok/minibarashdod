let Router = require('express-promise-router')
let get=require('../db/getData')
let add= require('../db/addData')
let del= require('../db/delete')
let update=require('../db/update')
let router = new Router()
router.post('/addCorrection',async (req, res)=>{
    console.log('req.body',req.body);
    console.log('req.body.name',req.body.obj.name);
    console.log('req.body.price',req.body.obj.price);
    let Correction = new add('Correction')
    let ans = await Correction.addOne(`'${req.body.obj.name}',${req.body.obj.price}`)
    res.json(ans)
})
router.get('/', async (req, res)=>{
    let Correction = new get('Correction')
    let ans = await Correction.findAll({})
    res.json(ans)
})

router.post('/showMachinInHaveToCustomer', async (req, res)=>{
    let customer = new get('CorrectionOfCustomer')
    let ans = await customer.showMachinInHaveToCustomer(`${req.body.id}`)
    res.json(ans)
})
router.post('/showDatesByMachin', async (req, res)=>{
    let customer = new get('CorrectionOfCustomer')
    let ans = await customer.showDatesByMachin(`${req.body.idCustomer}`,`'${req.body.nameMachin}'`)
    res.json(ans)
})
router.post('/showDatesByFilter', async (req, res)=>{
    let customer = new get('CorrectionOfCustomer')
    let ans = await customer.showDatesByFilter(`${req.body.idCustomer}`,`'${req.body.nameMachin}'`)
    res.json(ans)
})
router.post('/addCorrectionOfCustomer', async (req, res)=>{
    let customer = new add('CorrectionOfCustomer')
   
    let ans = await customer.addOne(`${req.body.idOrder},'${req.body.nameMachin}',${req.body.correctionid},'${req.body.myDate}',${req.body.correctionprice}`)
    res.json(ans)
})
router.get('/showCorrectionHistory', async (req, res)=>{
    let customer = new get('CorrectionOfCustomer')
    let ans = await customer.showCorrectionHistory()
    res.json(ans)
})
router.post('/showCorrectionHistoryByIdCustomer', async (req, res)=>{
    console.log("req.body.id",req.body.id);
    let customer = new get('CorrectionOfCustomer')
   
    let ans = await customer.showCorrectionHistoryByIdCustomer(`${req.body.id}`)
    res.json(ans)
})

module.exports = router