let sql = require('mssql')

var config = {
    port: 1433,
    user: 'chaya',
    password: '207322868',
    server: 'DESKTOP-B5S1T71',
    database: 'waterClean2'
 }


module.exports = function MyObject(col) {
    this.deleteOne = async (values) => {
        console.log(values)
        let connection = await sql.connect(config);
        let result = await connection.request().query(`DELETE FROM ${col}
        WHERE id = ${values}`)
         let ans = await connection.request().query(`select @@IDENTITY `)
         console.log(ans)
        console.log(ans.recordset[0])

        return ans.recordset[0];
    }
    this.deleteMachin = async (values) => {
        console.log(values)
        let connection = await sql.connect(config);
        let result = await connection.request().query(`DELETE FROM ${col}
        WHERE idProvied = ${values}`)
         let ans = await connection.request().query(`select @@IDENTITY `)
         console.log(ans)
        console.log(ans.recordset[0])

        return ans.recordset[0];
    }
    this.delVisit = async (values1,values2,values3) => {
        
        let connection = await sql.connect(config);
        let result = await connection.request().query(`
        delete top (1) from ${col}
        where idOrderFromCustomer=${values1} and dateOrderFromCustomer=${values2}and nameFilter=${values3}`)
        let ans = await connection.request().query(`select @@IDENTITY `)
        console.log(ans)
        console.log(ans.recordset[0])
        return ans.recordset[0];
    }
   
   
    this.deletorder = async (values) => {
        
        let connection = await sql.connect(config);
        let result = await connection.request().query(`
        DELETE FROM ${col} WHERE id = ${values}`)
        let ans = await connection.request().query(`select @@IDENTITY `)
        console.log(ans)
        console.log(ans.recordset[0])
        return ans.recordset[0];
    }
    this.deleteDalitsFromCustomer = async (values) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`
        DELETE FROM ${col} WHERE idOrderFromCustomer = ${values}`)
        let ans = await connection.request().query(`select @@IDENTITY `)
        console.log(ans)
        console.log(ans.recordset[0])
        return ans.recordset[0];
    }
    this.deleteDalitsFromProvider= async (values) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`
        DELETE FROM ${col} WHERE IdOrderFromProvider = ${values}`)
        let ans = await connection.request().query(`select @@IDENTITY `)
        console.log(ans)
        console.log(ans.recordset[0])
        return ans.recordset[0];
    }
    this.deletvisit = async (values) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`
        DELETE FROM ${col} WHERE idOrderFromCustomer = ${values}`)
        let ans = await connection.request().query(`select @@IDENTITY `)
        console.log(ans)
        console.log(ans.recordset[0])
        return ans.recordset[0];
    }
    this.deleteagovisit = async (values) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`
        DELETE FROM ${col} WHERE idOrderFromCustomer = ${values}`)
        let ans = await connection.request().query(`select @@IDENTITY `)
        console.log(ans)
        console.log(ans.recordset[0])
        return ans.recordset[0];
    }
}