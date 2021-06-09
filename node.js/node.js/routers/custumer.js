let Router = require('express-promise-router')
let get=require('../db/getData')
let add= require('../db/addData')
let del= require('../db/delete')
let update=require('../db/update')
let router = new Router()


router.get('/', async (req, res)=>{
    let customer = new get('Customers')
    let ans = await customer.findAll({})
    res.json(ans)
})

router.post('/addCustomer',async (req, res)=>{
    console.log('req.body',req.body);
    console.log('req.body.name',req.body.obj.name);
    console.log('req.body.address',req.body.obj.address);
    console.log('req.body.city',req.body.obj.city);
    console.log('req.body.phone',req.body.obj.phone);
    console.log('req.body.email',req.body.obj.Email);
    let custom = new add('Customers')
    let ans = await custom.addOne(`'${req.body.obj.name}','${req.body.obj.phone}','${req.body.obj.address}','${req.body.obj.city}','${req.body.obj.Email}'`)
    res.json(ans)
})
router.post('/deleteOne',async (req, res)=>{

    let deleteCus = new del('Customers')
    let ans = await deleteCus.deleteOne(`${req.body.id}`)
    res.json(ans)
   
})
router.post('/showHistroyCustomer',async (req, res)=>{
    console.log('req.body.mydate',req.body.mydate);
    console.log('req.body.myId',req.body.myid);
    let order = new get('DalitsOrderFromCustomer')
    let ans = await order.showHistroyCustomer(`o.dataOfOrder='${req.body.mydate}'and o.idCustomer=${req.body.myid}`)
    res.json(ans);
   
})
router.post('/showCountArrival',async (req, res)=>{
    console.log('req.body.id',req.body.mydate);
    console.log('req.body.myId',req.body.myid);
    let order = new get('DalitsOrderFromCustomer')
    let ans = await order.showCountArrivalToCustomer(`o.dataOfOrder='${req.body.mydate}'and o.idCustomer=${req.body.myid}`)
    res.json(ans);
   
})
router.post('/updateOne',async (req, res)=>{
    let updateOne = new update('Customers')
    let ans = await updateOne.updateOne(`${req.body.id}`,`${req.body.colum}`,`'${req.body.change}'`)
    res.json(ans)
   
})
router.post('/showVisitercustomer', async (req, res)=>{    
    let dates = new get('OrdersFromCustomers')
    let ans = await dates.showVisitercustomer(`${req.body.id}`)
    res.json(ans)
})
router.post('/checkIfDelete', async (req, res) => {
    let order = new get('OrdersFromCustomers')
    let dataOfOrder = await order.showAlldateIsHaveOrderfromCustomer(`'${req.body.myCustomer.fullName}'`)
    for (let item of dataOfOrder) {
        //תשלומים
        let order = new get('PayFromCustomer')
        let bateTotal = await order.getBateTotal(`where p.idOrderFromCustomer=${item.id}`)
        if (bateTotal.length == 0 || bateTotal[0].bateTotal != 0)
            res.json(1);
        //הגעה
        order = new get('DalitsOrderFromCustomer')
        let history = await order.showHistroyCustomer(`o.dataOfOrder='${item.date}' and o.idCustomer=${req.body.myCustomer.id}`)

        for (let h of history) {
            console.log("h", h);
            let order = new get('DalitsOrderFromCustomer')
            let countArrival = await order.showCountArrivalToCustomer(`o.dataOfOrder='${h.dateOrder}'and o.idCustomer=${req.body.myCustomer.id}`)
            console.log("countArrival", countArrival);
            for (let c of countArrival)
                if (h.countToOrder != c.countArrival)
                    res.json(2);

        }
    }
    res.json(0);

})

module.exports = router