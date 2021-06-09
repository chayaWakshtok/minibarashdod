
let express = require('express')
 let bd = require('body-parser') 
 let cors = require('cors') 
 

 let provider = require('./routers/provider')
 let custumer = require('./routers/custumer')
 let machineAndParts = require('./routers/machineAndParts')
 let strock = require('./routers/strock')
 let orderFromProvider= require('./routers/orderFromProvider')
 let orderFromCustomers=require('./routers/orderFromCustomers')
 let visitors=require('./routers/visitors')
let correction=require('./routers/correction')

 let app = express() 
 app.use(cors()) 
 app.use(bd.json()) 
 app.use(bd.urlencoded()) 


 
  app.use('/provider', provider)
  app.use('/customer', custumer)
  app.use('/machineAndParts', machineAndParts)
  app.use('/strock', strock)
  app.use('/orderFromProvider', orderFromProvider)
  app.use('/orderFromCustomers',orderFromCustomers)
  app.use('/visitors',visitors)
  app.use('/correction',correction)
 app.listen(3800)



  
 
