let Router = require('express-promise-router')
let get=require('../db/getData')
let add= require('../db/addData')
let update=require('../db/update')
let del= require('../db/delete')
let router = new Router()


router.get('/', async (req, res)=>{
    let MachinAndParties = new get('MachinAndParties')
    let ans = await MachinAndParties.findAll({})
    res.json(ans)
})

router.get('/getNameProvider/:id', async (req, res)=>{
    console.log('req.params.id');
    console.log(req.params.id);
    let MachinAndParties = new get('MachinAndParties')
    let ans = await MachinAndParties.findNameProviderById(`${req.params.id}`)
  console.log('after await')
 
    res.json(ans)
})

router.post('/addMachin',async (req, res)=>{
    console.log('req.body',req.body);
    console.log('req.body.id',req.body.id);
    
    console.log('req.body.nameMachin',req.body.obj.nameMachin);
    console.log('req.body.priceFromProvider',req.body.obj.priceFromProvider);
    console.log('req.body.precentFromProvider',req.body.obj.precentFromProvider);
    console.log('req.body.priceToCustomer',req.body.obj.priceToCustomer);
    console.log('req.body.precentToCustomer',req.body.obj.precentToCustomer);
    console.log('req.body.describe',req.body.obj.describe);
    console.log('req.body.isFilter',req.body.obj.isFilter);

    if(req.body.obj.countOfStrock=='')
    req.body.obj.countOfStrock=0
    // console.log('req.body.countOfStrock',req.body.obj.countOfStrock);
    let MachinAndParties = new add('MachinAndParties')
    if(req.body.obj.precentFromProvider=='')
    req.body.obj.precentFromProvider=0
    if(req.body.obj.precentToCustomer=='')
    req.body.obj.precentToCustomer=0;
    let ans = await MachinAndParties.addOne(`'${req.body.obj.nameMachin}','${req.body.obj.describe}',${req.body.id},
    ${req.body.obj.priceFromProvider},${req.body.obj.precentFromProvider},${req.body.obj.priceToCustomer},${req.body.obj.precentToCustomer},${req.body.obj.countOfStrock},'${req.body.obj.isFilter}'`)
    res.json(ans)
})

router.post('/updataMachin',async(req,res)=>{
    let MachinAndParties = new update('MachinAndParties')
    let ans=await MachinAndParties.updateStrock(`${req.body.name}`,`${req.body.count}`)
    res.json(ans)
})

router.post('/updataStrockCustom',async(req,res)=>{
    let MachinAndParties = new update('MachinAndParties')
    let ans=await MachinAndParties.updataStrockCustom(`${req.body.name}`,`${req.body.count}`)
    res.json(ans)
})

router.post('/deleteMachin',async (req, res)=>{
        let deleteMachin= new del('machinAndParties')
    let ans = await deleteMachin.deleteMachin(`${req.body.id}`)
    res.json(ans)
})

router.post('/updateOne',async (req, res)=>{
    
    let updateOne = new update('machinAndParties')
    let ans = await updateOne.updateOne(`${req.body.id}`,`${req.body.colum}`,`'${req.body.change}'`)
    res.json(ans)
   
})

router.post('/deleteOne',async (req, res)=>{
    
    let deleteCus = new del('machinAndParties')
    let ans = await deleteCus.deleteOne(`${req.body.id}`)
    res.json(ans)
   
})

module.exports = router