let Router = require('express-promise-router')
let get=require('../db/getData')
let add= require('../db/addData')
let update=require('../db/update')
let del= require('../db/delete')
let router = new Router()

router.post('/addOrderFromCustomer',async (req, res)=>{
    let order = new add('OrdersFromCustomers')
    let ans = await order.addOne(`${req.body.myidCustomer},'${req.body.mydate}'`)
    res.json(ans)
})
router.post('/addVisiteOfCustomer',async (req, res)=>{
    let order = new add('VisiteOfCustomer')
    let ans = await order.addOne(`${req.body.myId},'${req.body.mydate}'`)
    res.json(ans)
})
router.get('/showAllCustomerIsHaveOrder', async (req, res)=>{
    let order = new get('OrdersFromCustomers')
    let ans = await order.showAllCustomerIsHaveOrder(``)
    res.json(ans)
})
router.post('/addDalitsOrderFromCustomer',async (req, res)=>{
      let idMachin=new get('MachinAndParties');
      let id=  await idMachin.showIdMachinByNameMachin(req.body.myNameMachin)
    let order = new add('DalitsOrderFromCustomer')
    let ans = await order.addOne(`${req.body.myId},'${id}',${req.body.mycount},${req.body.myfinalyPrice}`)
       res.json(ans)
})
router.post('/showAlldateIsHaveOrderfromCustomer', async (req, res)=>{   
    let dates = new get('OrdersFromCustomers')
    let ans = await dates.showAlldateIsHaveOrderfromCustomer(`'${req.body.name}'`)
    res.json(ans)
})
router.post('/getBateTotal',async (req, res)=>{
    let order = new get('PayFromCustomer')
    let ans = await order.getBateTotal(` where p.idOrderFromCustomer=${req.body.myid}`)
    res.json(ans)
})
router.post('/addPayToCustomer',async (req, res)=>{
    console.log('rrrrrrrrrrrrrrrrrrrreq.body.bateTotal',req.body.bateTotal);
    let order = new add('PayFromCustomer')
    let ans = await order.addOne(`${req.body.idOrder},'${req.body.wayPay}',${req.body.sumTotal},${req.body.bateTotal}`)
    res.json(ans)
})
router.post('/addOrderArival',async (req, res)=>{
    let order = new add('OrderArrivalToCustomer')
    let date=new Date()
    console.log("data",date);
    let a=req.body.arr.countToOrder-req.body.arr.countArrival
    let ans = await order.addOne(`${req.body.arr.id},'${date}',${req.body.arr.countArrival},${a}`)
    res.json(ans)  
})
router.post('/deleteOrder',async (req, res)=>{
    let strock= new update('machinAndParties')
    let order= new del('OrdersFromCustomers')
    let Dalits= new del('DalitsOrderFromCustomer')
    let visit= new del('VisiteOfCustomer')
    let agovisit= new del('AgoVisiteOfCustomer')
    let ans1 = await strock.updetstrock(`${req.body.name}`,`${req.body.count}`)
    let ans2 = await order.deletorder(`${req.body.id}`)
    let ans3 = await Dalits.deleteDalitsFromCustomer(`${req.body.id}`)
    res.json(ans1)
})

router.post('/upDateOrder',async (req, res)=>{
    console.log('req.body.finalPrice',req.body.finalPrice);
    let strock= new update('machinAndParties')
    let Dalits= new update('DalitsOrderFromCustomer')
    let visit= new update('VisiteOfCustomer')
    let agovisit= new update('AgoVisiteOfCustomer')
    let ans1 = await strock.updetCountstrock(`${req.body.name}`,`${req.body.count}`,`${req.body.countUpDate}`)
    let ans2 = await Dalits.upDeteDalits(`${req.body.id}`,`${req.body.count}`,`${req.body.finalPrice}`)
    res.json(ans1)
})

module.exports = router