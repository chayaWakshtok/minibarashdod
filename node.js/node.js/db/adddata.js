let sql = require('mssql')

var config = {
    port: 1433,
    user: 'chaya',
    password: '207322868',
    server: 'DESKTOP-B5S1T71',
    database: 'waterClean2'
 }


module.exports = function MyObject(Providers) {
    var table = Providers

    this.addOne = async (values) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`insert into ${table}  values (${values}) `)
        let ans = await connection.request().query(`select @@IDENTITY `)
        return ans.recordset[0];
    }
    
    this.addAgoVisit = async (values1,values2,values3) => {
        
        let connection = await sql.connect(config);
        let result = await connection.request().query(`insert into AgoVisiteOfCustomer(idOrderFromCustomer,dateOrderFromCustomer,nameFilter,cost,[count],nameFilterAgo)
        select top 1 idOrderFromCustomer,dateOrderFromCustomer,nameFilter,cost,[count] ,nameFilterAgo from ${table}
        where idOrderFromCustomer=${values1} and dateOrderFromCustomer=${values2} and nameFilter=${values3}`)
        let ans = await connection.request().query(`select @@IDENTITY `)
        return ans.recordset[0];
    }
    
}
