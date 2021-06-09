let Router = require('express-promise-router')
let get = require('../db/getData')
let add = require('../db/addData')
let del = require('../db/delete')
let update = require('../db/update')
let orderFromProvider = require('./orderFromProvider')
let router = new Router()


router.get('/', async (req, res) => {
    let provider = new get('Providers')
    let ans = await provider.findAll({})
    res.json(ans)
})

router.post('/showHistroyProvider', async (req, res) => {
    console.log('sdfjh');
    console.log('req.body.mydate', req.body.mydate);
    console.log('req.body.myId', req.body.myid);
    let order = new get('DalitsOrderFromProviders')
    let ans = await order.showHistroyProvider(`o.dateOrderFromProvider='${req.body.mydate}' and o.idProvider=${req.body.myid}`)
    res.json(ans)

})

router.post('/showIdByName', async (req, res) => {
    console.log('req.body.myId', req.body.name);
    let idByName = new get('providers')
    let ans = await idByName.showIdByName(`${req.body.name}`)
    res.json(ans)

})

router.post('/addProvider', async (req, res) => {
    let provid = new add('providers')
    let ans = await provid.addOne(`'${req.body.obj.name}','${req.body.obj.phone}','${req.body.obj.address}','${req.body.obj.Email}'`)
    res.json(ans)
})

router.post('/deleteOne', async (req, res) => {
    let deletePro = new del('providers')
    let ans = await deletePro.deleteOne(`${req.body.id}`)
    res.json(ans)

})

router.post('/updateOne', async (req, res) => {

    let updateOne = new update('providers')
    let ans = await updateOne.updateOne(`${req.body.id}`, `${req.body.colum}`, `'${req.body.change}'`)
    res.json(ans)

})

router.post('/showCountArrival', async (req, res) => {
    console.log('req.body.id', req.body.mydate);
    console.log('req.body.myId', req.body.myid);
    let order = new get('DalitsOrderFromProviders')
    let ans = await order.showCountArrivalToProvider(`o.dateOrderFromProvider='${req.body.mydate}'and o.idProvider=${req.body.myid}`)
    res.json(ans);

})

router.post('/checkIfDelete', async (req, res) => {
    let order = new get('OrdersFromProviders')
    let dataOfOrder = await order.showAlldateIsHaveOrderfromProvider(`'${req.body.myProvider.fullName}'`)
    for (let item of dataOfOrder) {
        //תשלומים
        let order = new get('PayToProviders')
        let bateTotal = await order.getBateTotal(`where p.idOrderFromProvider=${item.id}`)
        if (bateTotal.length == 0 || bateTotal[0].bateTotal != 0)
            res.json(1);
        //הגעה
        order = new get('DalitsOrderFromProviders')
        let history = await order.showHistroyProvider(`o.dateOrderFromProvider='${item.date}' and o.idProvider=${req.body.myProvider.id}`)

        for (let h of history) {
            console.log("h", h);
            order = new get('DalitsOrderFromProviders')
            let countArrival = await order.showCountArrivalToProvider(`o.dateOrderFromProvider='${h.dateOrder}'and o.idProvider=${req.body.myProvider.id}`)
            console.log("countArrival", countArrival);
            for (let c of countArrival)
                if (h.countToOrder != c.countArrival)
                    res.json(2);

        }

    }
    //מלאי
    let MachinAndParties = new get('MachinAndParties')
    let machin = await MachinAndParties.showMachinByIdProvider(`${req.body.myProvider.id}`)
    for (let i = 0; i < machin.length; i++) {
        if (machin[i].countOfStrock > 0)
            res.json(3);
    }
    res.json(0);

})

module.exports = router