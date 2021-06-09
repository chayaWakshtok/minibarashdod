let Router = require('express-promise-router')
let get=require('../db/getData')
let add= require('../db/addData')
let del=require('../db/delete')
let update=require('../db/update')
let router = new Router()


router.get('/showMachinByIdProvider/:id', async (req, res)=>{
    let MachinAndParties = new get('MachinAndParties')
    let ans = await MachinAndParties.showMachinByIdProvider(`${req.params.id}`)
    res.json(ans)
})
router.post('/addOrderFromProvider',async (req, res)=>{
    let order = new add('OrdersFromProviders')
    let ans = await order.addOne(`${req.body.myidProvider},'${req.body.mydate}'`)
    res.json(ans)
})
router.get('/showAllProvidersIsHaveOrder', async (req, res)=>{
    let order = new get('OrdersFromProviders')
    let ans = await order.showAllProvidersIsHaveOrder(``)
    res.json(ans)
})

router.post('/showAlldateIsHaveOrderfromProvider', async (req, res)=>{
    let MachinAndParties = new get('OrdersFromProviders')
    let ans = await MachinAndParties.showAlldateIsHaveOrderfromProvider(`'${req.body.myName}'`)
    res.json(ans)
})

router.post('/addDalitsOrderFromProviders',async (req, res)=>{
    console.log('req.body.myNameMachin',req.body.myNameMachin);
    console.log('req.body.mycount',req.body.mycount);
    console.log('req.body.myId',req.body.myId);
    console.log('req.body.finalyPrice',req.body.myfinalyPrice);
      let idMachin=new get('MachinAndParties');
      let id=  await idMachin.showIdMachinByNameMachin(req.body.myNameMachin)
      console.log('idMachin',id);
      
    let order = new add('DalitsOrderFromProviders')
    let ans = await order.addOne(`${req.body.myId},${id},${req.body.mycount},${req.body.myfinalyPrice}`)
    res.json(ans)
})
router.post('/addPayToProviders',async (req, res)=>{
    console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrreq.body.bateTotal',req.body.bateTotal);
    let order = new add('PayToProviders')
    let ans = await order.addOne(`${req.body.idOrder},'${req.body.wayPay}',${req.body.sumTotal},${req.body.bateTotal}`)
    res.json(ans)
})
router.post('/getBateTotal',async (req, res)=>{
    let order = new get('PayToProviders')
    let ans = await order.getBateTotal(` where p.idOrderFromProvider=${req.body.myid}`)
    res.json(ans)
})
router.post('/addOrderArival',async (req, res)=>{
    let order = new add('OrderArrivalFromProvider')
    let date=new Date()
    console.log("data",date);
    let a=req.body.arr.countToOrder-req.body.arr.countArrival
    let ans = await order.addOne(`${req.body.arr.id},'${date}',${req.body.arr.countArrival},${a}`)
    res.json(ans)  
})
router.post('/deleteOrder',async (req, res)=>{
    let strock= new update('machinAndParties')
    let order= new del('OrdersFromProviders')
    let Dalits= new del('DalitsOrderFromProviders')
    let ans1 = await strock.updetstrock(`${req.body.name}`,`${req.body.count}`)
    let ans2 = await order.deletorder(`${req.body.id}`)
    let ans3 = await Dalits.deleteDalitsFromProvider(`${req.body.id}`)
    res.json(ans1)
})

router.post('/upDateOrder',async (req, res)=>{
    
    let strock= new update('machinAndParties')
    let Dalits= new update('DalitsOrderFromProviders')
    let ans1 = await strock.updetCountstrock(`${req.body.name}`,`${req.body.count}`,`${req.body.countUpDate}`)
    console.log('req.body.id',req.body.id);
    console.log('req.body.count',req.body.count);
    console.log('req.body.finalPrice',req.body.finalPrice);
    console.log('req.body.name',req.body.name);
    console.log('req.body.countUpDate',req.body.countUpDate);
    let ans2 = await Dalits.upDeteDalits(`${req.body.id}`,`${req.body.count}`,`${req.body.finalPrice}`)
    res.json(ans1)
})


module.exports = router