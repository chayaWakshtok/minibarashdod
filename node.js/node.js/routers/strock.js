let Router = require('express-promise-router')
let get=require('../db/getData')
let add= require('../db/addData')
let router = new Router()


router.get('/', async (req, res)=>{
    let strock = new get('Strock')
    let ans = await strock.findAll({})
    res.json(ans)
})
module.exports = router