let p = require('path')
 let fs = require('fs')
  module.exports = function () { 
      this.customeresPath = p.join(__dirname, '../data/customeres.json')
       this.getListCustomers = () => {
            let data = fs.readFileSync(this.customeresPath); 
            return JSON.parse(data) 
        } 
    }     