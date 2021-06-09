let p = require('path')
 let fs = require('fs')
  module.exports = function () { 
      this.providersPath = p.join(__dirname, '../data/providers.json')
       this.getListProvider = () => {
            let data = fs.readFileSync(this.providersPath); 
            return JSON.parse(data) 
        } 
    }     