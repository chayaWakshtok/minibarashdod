let p = require('path')
 let fs = require('fs')
  module.exports = function () { 
      this.machineAndPartsPath = p.join(__dirname, '../data/machineAndParts.json')
       this.getListMachineAndParts = () => {
            let data = fs.readFileSync(this.machineAndPartsPath); 
            return JSON.parse(data) 
        } 
    }     