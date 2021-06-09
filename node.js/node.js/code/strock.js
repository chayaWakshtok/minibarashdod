let p = require('path')
 let fs = require('fs')
  module.exports = function () { 
      this.strockPath = p.join(__dirname, '../data/strock.json')
       this.getListStrock = () => {
            let data = fs.readFileSync(this.strockPath); 
            return JSON.parse(data) 
        } 
    }     