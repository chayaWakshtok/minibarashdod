
let sql = require('mssql')
var config = {
   port: 1433,
   user: 'chaya',
   password: '207322868',
   server: 'DESKTOP-B5S1T71',
   database: 'waterClean2'
}

module.exports = function MyObject(col) {
   let table = col

   this.findAll = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select * from ${table} order by id`)
      return result.recordset;
   }

   this.findNameProviderById = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select DISTINCT r.fullName 
        from (select p.fullName,m.nameMachin,m.idProvied 
            from Providers p join  ${table} m
            on p.id=m.idProvied) r 
           where r.idProvied=${query}`)
      console.log(result.recordset[0]);
      return result.recordset;
   }
   this.showAllProvidersIsHaveOrder = async (query) => {

      let connection = await sql.connect(config)
      let result = await connection.request().query(`select DISTINCT p.fullName,p.id
        from ${table} o join [dbo].[providers] p
        on p.id=o.idProvider`)
      return result.recordset;
   }
   this.showAllCustomerIsHaveOrder = async (query) => {

      let connection = await sql.connect(config)
      let result = await connection.request().query(`select DISTINCT c.fullName,c.id
        from ${table} o join [dbo].Customers c
        on c.id=o.idCustomer`)
      return result.recordset;
   }
   this.showAlldateIsHaveOrderfromProvider = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select a.fullName,a.dateOrderFromProvider as [date],a.id from
        (select o.dateOrderFromProvider,p.fullName,o.id
        from ${table} o join providers p
        on o.idProvider=p.id)a
        where a.fullName=${query}`)
      return result.recordset;
   }

   this.showAlldateIsHaveOrderfromCustomer = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select a.fullName,a.dataOfOrder as [date],a.id from
        (select o.dataOfOrder,c.fullName,o.id
        from ${table} o join Customers c
        on o.idCustomer=c.id)a
        where a.fullName=${query}`)
      console.log(result.recordset);
      return result.recordset;
   }
   this.showMachinByIdProvider = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select *
            from ${table}
           where idProvied=${query}`)
      return result.recordset;
   }

   this.showIdMachinByNameMachin = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select id
        from ${table}
        where nameMachin='${query}'`)
      console.log(result.recordset[0].id)
      return result.recordset[0].id;
   }


   this.showHistroyProvider = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select d.id,o.dateOrderFromProvider as dateOrder,m.nameMachin as nameMachin,d.countToOrder as countToOrder,m.priceFromProvide as priceOfSingel,m.percentageFromProvide as percentageOfSingel,d.IdOrderFromProvider as IdOrder,d.[finalPrice]
        ,o.idProvider as idMan
        from OrdersFromProviders o join ${table} d
        on o.id=d.IdOrderFromProvider join MachinAndParties m
        on d.idMachin=m.id
        where ${query}
        order by  d.IdOrderFromProvider`)
      console.log(result.recordset);
      return result.recordset;
   }

   this.showHistroyCustomer = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select d.id,o.dataOfOrder as dateOrder,m.nameMachin as nameMachin,d.[count] as countToOrder,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,d.idOrderFromCustomer as IdOrder,m.isFilter,
        o.idCustomer as idMan,d.[finalPrice]
        from OrdersFromCustomers o join ${table} d
        on o.id=d.idOrderFromCustomer join MachinAndParties m
        on d.idMachin=m.id
  where ${query}`)
      return result.recordset;
   }

   this.showCountArrivalToCustomer = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select  d.id,sum(a.ArrivaCount) as countArrival
      from OrdersFromCustomers o join ${table} d
      on o.id=d.idOrderFromCustomer join MachinAndParties m
      on d.idMachin=m.id left join OrderArrivalToCustomer a
      on a.idDitelsOrderFromCustomer=d.id
      where ${query}
      group by d.id `)
      return result.recordset;
   }
   this.showCountArrivalToProvider = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select  d.id,sum(a.ArrivaCount) as countArrival
      from OrdersFromProviders o join ${table} d
      on o.id=d.IdOrderFromProvider join MachinAndParties m
      on d.idMachin=m.id left join OrderArrivalFromProvider a
      on a.idDitelsOrderFromProvider=d.id
      where ${query}
      group by d.id `)
      return result.recordset;
   }

   this.showIdByName = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(` select id from providers
        where fullName=${query}`)
      return result.recordset;
   }
   this.getBateTotal =
      async (query) => {
         let connection = await sql.connect(config)
         let result = await connection.request().query(` select TOP 1 p.bateTotal from
        ${table} p  
       ${query}
        ORDER BY p.bateTotal `)
         return result.recordset;
      }

   this.getVisitors = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id as idOrderFromCustomer
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join ${table} v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
and cast (v.dateOrderFromCustomer as date)<= dateadd(day,30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
and cast (v.dateOrderFromCustomer as date)> =dateadd(day,-30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
ORDER BY CONVERT(DATE, v.dateOrderFromCustomer) ASC
`)
      return result.recordset;
   }

   this.getfilterim = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select distinct * 
    from ${table}
    where isFilter='true' and countOfStrock>0  `)
      return result.recordset;
   }

   this.getOldVisitors = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id as idOrderFromCustomer
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join ${table} v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
and cast (v.dateOrderFromCustomer as date)< =dateadd(day,-31,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
ORDER BY CONVERT(DATE, v.dateOrderFromCustomer) ASC`)

      return result.recordset;
   }
   this.getAllVisitThisYear = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id as idOrderFromCustomer
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join ${table} v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
   and cast (v.dateOrderFromCustomer as date)>= dateadd(day,-31,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
   ORDER BY CONVERT(DATE, v.dateOrderFromCustomer) ASC
`)
      //  console.log(result);

      return result.recordset;
   }
   this.showVisitercustomer = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select a.id as IdOrder ,a.dateOrderFromCustomer as dateOrder ,a.nameFilter as nameMachin,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,  a.cost as finalPrice ,a.[count] as countToOrder,a.nameFilterAgo from AgoVisiteOfCustomer a
   join ${table} o 
   on a.idOrderFromCustomer=o.id join MachinAndParties m
   on m.nameMachin=a.nameFilter
   where o.idCustomer=${query}
   union 
   select v.id as IdOrder ,v.dateOrderFromCustomer as dateOrder ,v.nameFilter as nameMachin,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,  v.cost as finalPrice ,v.[count] as countToOrder,v.nameFilterAgo from VisiteOfCustomer v
   join OrdersFromCustomers o 
   on v.idOrderFromCustomer=o.id join MachinAndParties m
   on m.nameMachin=v.nameFilter
   where o.idCustomer=${query}`)
      // console.log(result.recordset);
      return result.recordset;
   }

   this.showMachinInHaveToCustomer = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`select DISTINCT m.*
   from OrdersFromCustomers o join DalitsOrderFromCustomer d
   on o.id=d.idOrderFromCustomer join MachinAndParties m
   on d.idMachin=m.id 
 where o.idCustomer=${query} and m.isFilter!='true'
 UNION
 select DISTINCT m.*
 from VisiteOfCustomer v join OrdersFromCustomers o 
 on o.id=v.idOrderFromCustomer join
 MachinAndParties m
 on v.nameFilter=m.nameMachin 
where o.idCustomer=${query}
`)
      // console.log(result.recordset);
      return result.recordset;
   }

   this.showDatesByMachin = async (query1, query2) => {
      console.log(query1);
      console.log(query2);
      let connection = await sql.connect(config)
      let result = await connection.request().query(`   select oa.ArrivalDate  as  dataOfOrder ,o.id from OrderArrivalToCustomer oa join DalitsOrderFromCustomer d
   on oa.idDitelsOrderFromCustomer=d.id join OrdersFromCustomers o
   on o.id=d.idOrderFromCustomer join MachinAndParties m
   on m.id=d.idMachin	
      where o.idCustomer=${query1}  and m.nameMachin=${query2} and oa.ArrivaCount>0
`)
      // console.log(result.recordset);
      return result.recordset;
   }
   this.showDatesByFilter = async (query1, query2) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`
   select v.dateOrderFromCustomer as  dataOfOrder ,o.id 
   from VisiteOfCustomer v join OrdersFromCustomers o
   on o.id=v.idOrderFromCustomer
   where o.idCustomer=${query1} and  v.nameFilter=${query2}   
`)
      // console.log(result.recordset);
      return result.recordset;
   }
   this.showCorrectionHistory = async () => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`
   select cu.fullName,o.id as idOrder,c.nameMachin,c.dateOfCorrection,co.descriptionCorrection,c.price 
   from ${table} c
join Correction co
on c.idCorrection=co.id  join OrdersFromCustomers o
on o.id=c.idOrderFromCustomer join Customers cu
on cu.id=o.idCustomer
`)
      // console.log(result.recordset);
      return result.recordset;
   }
   this.showCorrectionHistoryByIdCustomer = async (query) => {
      let connection = await sql.connect(config)
      let result = await connection.request().query(`
   select c.id,c.dateOfCorrection as dateOrder,c.nameMachin,co.descriptionCorrection,c.price as finalPrice from ${table} c
join OrdersFromCustomers o
on o.id=c.idOrderFromCustomer join Correction co
on co.id=c.idCorrection
where o.idCustomer=${query}
`)
      // console.log(result.recordset);
      return result.recordset;
   }

}

