let Router = require('express-promise-router')
let get=require('../db/getData')
let add= require('../db/addData')
let del= require('../db/delete')
let update=require('../db/update')
let router = new Router()

router.get('/getVisitors', async (req, res)=>{
    let visit = new get('VisiteOfCustomer')
    let ans = await visit.getVisitors({})
    res.json(ans)
})
router.get('/getOldVisitors', async (req, res)=>{
    let visit = new get('VisiteOfCustomer')
    let ans = await visit.getOldVisitors({})
    res.json(ans)
})
router.get('/getAllVisitThisYear', async (req, res)=>{
    let visit = new get('VisiteOfCustomer')
    let ans = await visit.getAllVisitThisYear({})
    res.json(ans)
})

router.post('/addVisiteOfCustomer',async (req, res)=>{
     console.log('req.body.id',req.body.id);
     console.log('req.body.date',req.body.date);
     console.log('req.body.nameMachin',req.body.nameMachin);
     console.log('req.body.sum',req.body.sum);
    console.log('req.body.count',req.body.count);
    console.log('req.body.nameFilterAgo',req.body.nameFilterAgo);

    let visit = new add('VisiteOfCustomer')
    let ans1 = await visit.addOne(`${req.body.id},'${req.body.date}','${req.body.nameMachin}',${req.body.sum},${req.body.count},'${req.body.nameFilterAgo}'`)
    res.json(ans1)
})


router.post('/addAgoVisitAndDelVisit',async (req, res)=>{
    let visit = new add('VisiteOfCustomer')
    let agovisit=new del('VisiteOfCustomer')
    let ans2 = await visit.addAgoVisit(`${req.body.id}`,`'${req.body.date}'`,`'${req.body.nameFilter}'`)
    let ans3 = await agovisit.delVisit(`${req.body.id}`,`'${req.body.date}'`,`'${req.body.nameFilter}'`)
    res.json(ans2)
})

router.get('/getfilterim',async (req, res)=>{
    let filterim = new get('MachinAndParties')
    let ans = await filterim.getfilterim({})
    res.json(ans)
})
module.exports = router

