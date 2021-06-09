let sql = require('mssql')
var config = {
    port: 1433,
    user: 'chaya',
    password: '207322868',
    server: 'DESKTOP-B5S1T71',
    database: 'waterClean2'
 }
module.exports = function MyObject(col) {
    var table = col

    this.updateStrock = async (name,count) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`update  ${table}
        set countOfStrock=countOfStrock+${count}
        where id=(select id
        from ${table}
        where nameMachin='${name}')`)
        return result;
    }
    this.updataStrockCustom = async (name,count) => {
   
        let connection = await sql.connect(config);
        let result = await connection.request().query(`update  ${table}
        set countOfStrock=countOfStrock-${count}
        where id=(select id
        from ${table}
        where nameMachin='${name}')`)
        return result;
    }
    this.updateOne=async(id,colum,change)=>{
        let connection = await sql.connect(config);
        let result = await connection.request().query(`update ${table}
        set ${colum}= ${change} where id=${id}`)
        return result;
    }
   
    this.updetstrock = async (name,count) => {
        console.log(name)
        console.log(count)
        let connection = await sql.connect(config);
        let result = await connection.request().query(`update  ${table}
        set countOfStrock=countOfStrock+${count}
        where id=(select id
        from ${table}
        where nameMachin='${name}')`)
        return result;
    }
    this.updetCountstrock = async (name,count,countAgo) => {
        console.log(name)
        console.log(count)
        let connection = await sql.connect(config);
        let result = await connection.request().query(`update  ${table}
        set countOfStrock=countOfStrock-${count}+${countAgo}
        where id=(select id
        from ${table}
        where nameMachin='${name}')`)
        return result;
    }
    
    this.upDeteDalits  = async (id,count,finalPrice) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`update  ${table}
        set count=${count}, finalPrice=${finalPrice}
        where id=${id}`)
        return result;
    }
    this.upDatevisit  = async (id,count) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`update  ${table}
        set count=${count}
        where idOrderFromCustomer=${id}`)
        return result;
    }
    this.upDateagovisit  = async (id,count) => {
        let connection = await sql.connect(config);
        let result = await connection.request().query(`update  ${table}
        set count=${count}
        where idOrderFromCustomer=${id}`)
        return result;
    }
   
}