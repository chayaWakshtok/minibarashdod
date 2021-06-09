
--יצירת dataBase
CREATE DataBase[waterClean]
--select של כל הטבלאות
select*from providers
select*from machinAndParties
select*from OrdersFromProviders
select*from Strock
select*from OrderArrival
select*from OrdersFromCustomers
select*from DalitsOrderFromCustomer
select*from DalitsOrderFromProviders
select* from Customers

--יצירת טבלת ספקים

CREATE TABLE [dbo].[providers]                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	fullName [nvarchar](20)NOT NULL,
	phone [nvarchar](20)NOT NULL,
	[Address] [nvarchar](50) NULL,
	email [nvarchar](50) NULL
)
CREATE TABLE filterim                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	nameFilter [nvarchar](20)NOT NULL,
	
)
INSERT INTO filterim
 VALUES
 ('פילטרים' )
 INSERT INTO filterim
 VALUES
 ('פילטרים הכי שיש')
--הכנסת נתונים לטבלת ספקים
INSERT INTO [providers]
 VALUES
 (' לוי שוקי','0583243470','האתרוג 44','b05832434702gmail.com')
 INSERT INTO [providers]
 VALUES
 (' יוסי כהן ','088578588','שמעון 44','c05832845892gmail.com')
 INSERT INTO [dbo].[providers]
  VALUES
 (' יוני משוש ','02258698','הרותם 45','c05832845892gmail.com') 
 --יצירת טבלת תיקונים

 CREATE TABLE Correction                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	descriptionCorrection [nvarchar](50)NOT NULL,
	price int not null
	
)
select * from Correction
--יצירת טבלת תיקונים אצל לקוחות
 CREATE TABLE CorrectionOfCustomer                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idOrderFromCustomer int NOT NULL,
	nameMachin nvarchar(20) not null,
	idCorrection int not null,
	dateOfCorrection [nvarchar](50)NOT NULL,
	price int not null
	
)
CREATE TABLE [dbo].[Customers]                               
(
	id [int] IDENTITY(1,1) NOT NULL,
	fullName [nvarchar](20)NOT NULL,
	phone [nvarchar](20)NOT NULL,
	[address] [nvarchar](50)not NULL,
	city [nvarchar](50)not NULL,
	email [nvarchar](50) null
)
INSERT INTO [Customers]
 VALUES
 ('חיה לב'	,'0548793658',	' 9הרותם', 	'אשדוד','')
 INSERT INTO [Customers]
 VALUES
 ('ברסקי '	,'12345678',	' הארגים', 	'אופקים','')
 INSERT INTO [Customers]
 VALUES
 ('לוי '	,'987654321',	' הבונים', 	'אופקים','')
 select*from MachinAndParties
 create TABLE DalitsOrderFromCustomer                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idOrderFromCustomer int NOT NULL,
	idMachin int not null,
	[count] int NOT NULL,
	finalPrice int not null
)

CREATE TABLE DalitsOrderFromProviders                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	IdOrderFromProvider int NOT NULL,
	idMachin int not null,
	countToOrder int NOT NULL,
	finalPrice int not null
	
)
 INSERT INTO DalitsOrderFromProviders
 VALUES
 (2,	2,	5)

CREATE TABLE MachinAndParties                             
(
	id [int] IDENTITY(1,1) NOT NULL,
	nameMachin [nvarchar](20)NOT NULL,
	describe [nvarchar](20) NULL,
	idProvied int NOT NULL,
	priceFromProvide int NOT NULL,
	percentageFromProvide int  NULL,
	priceToCustomer int NOT NULL,
	percentageToCustomer int  null,
	countOfStrock int not null,
	isFilter  varchar(7) not null

)

select*
from MachinAndParties m join providers p
on p.id=m.idProvied
 INSERT INTO MachinAndParties
 VALUES( 'מטהרי מים',null		,1	,100,	10	,200,	5,0,'false')

 INSERT INTO MachinAndParties
 VALUES('מסננים	','מקסים',2	,120,NULL	,130,	NULL,0,'false')

  INSERT INTO MachinAndParties
 VALUES('פילטרים','מקסים',2	,120,NULL	,130,NULL,0,'true')

 INSERT INTO MachinAndParties
 VALUES('מינ בר יהלום','מהודר לשבת'	,1	,500	,3	,600	,3,0,'false')

 INSERT INTO MachinAndParties
 VALUES('מסננים סוג א',	NULL,	1,	400,	NULL,	500	,NULL,0,'false')


CREATE TABLE OrderArrivalToCustomer                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idDitelsOrderFromCustomer int NOT NULL,
	ArrivalDate [nvarchar](100)NOT NULL,
	ArrivaCount int not null,
	MissingCount int NOT NULL
	
)
CREATE TABLE OrderArrivalFromProvider                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idDitelsOrderFromProvider int NOT NULL,
	ArrivalDate [nvarchar](100)NOT NULL,
	ArrivaCount int not null,
	MissingCount int NOT NULL
	
)
CREATE TABLE OrdersFromCustomers                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idCustomer int NOT NULL,
	dataOfOrder [nvarchar](100)NOT NULL

	
)
CREATE TABLE OrdersFromProviders                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idProvider int NOT NULL,
	dateOrderFromProvider [nvarchar](100)NOT NULL	
)
CREATE TABLE PayFromCustomer                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idOrderFromCustomer int NOT NULL,
	wayOfPay [nvarchar](20) NULL,	
	sumTotal int NOT NULL,
	bateTotal int NOT NULL
)
CREATE TABLE PayToProviders                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idOrderFromProvider int NOT NULL,
	wayOfPay [nvarchar](20)NOT NULL,	
	sumTotal int NOT NULL,
	bateTotal int NOT NULL
)
CREATE TABLE Strock                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idMachin int NOT NULL,
	dateOfTheStrock [nvarchar](20) NULL,	
	strockCount int NOT NULL,
)
insert into Strock
values(1	,'01/09/2020')
CREATE TABLE VisiteOfCustomer                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idOrderFromCustomer int NOT NULL,
	dateOrderFromCustomer [nvarchar](100)NOT NULL,
	nameFilter [nvarchar](100)NOT NULL,
	cost int NOT NULL,
	[count] int not null,
	nameFilterAgo [nvarchar](100)NOT NULL 
)

CREATE TABLE AgoVisiteOfCustomer                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idOrderFromCustomer int NOT NULL,
	dateOrderFromCustomer [nvarchar](100)NOT NULL,
	nameFilter [nvarchar](100)NOT NULL,
	cost int NOT NULL,
	[count] int not null,
	nameFilterAgo [nvarchar](100)NOT NULL 
)
select * from AgoVisiteOfCustomer
select * from VisiteOfCustomer

--הפונקציה מכניסה לטבלת הזמנות מספקים את התאריך של היום וכן את הid של הספק
--וכן לטבלת פירוט הזמנה מספק את הנתונים 
insert  into [dbo].[OrdersFromProviders] VALUES(1,GETDATE())

declare @idProvider Int 
 select @idProvider= id from [dbo].[providers] 
where fullName='דני לוי'
insert  into [dbo].[OrdersFromProviders]  VALUES(@idProvider,GETDATE())

declare @idmachin Int 
 select @idmachin= id from[dbo].[machinAndParties]
where nameMachin='מסננים'
insert into [DalitsOrderFromProviders] values(@@IDENTITY,@idmachin,5)


--הפונקציה מביאה לכל ספק את המכשירים שהוא מוכר ואת שמו
select m.nameMachin,p.fullName
 from [machinAndParties] m join Providers p
 on m.idProvied=p.id
where idProvied=(select  id from [dbo].[providers] 
where fullName='דני לוי')
declare @idProvider nvarchar

select idMachin,sum(countToOrder)as [sum]
 from[dbo].[DalitsOrderFromProviders]
group by idMachin


DELETE FROM providers
WHERE id = 5


update providers
 set fullName='יוסי כהן '
 where id=2


 select a.fullName,a.dataOfOrder,a.id from
        (select o.dataOfOrder,c.fullName,o.id
        from OrdersFromCustomers o join Customers c
        on o.idCustomer=c.id)a
        where a.fullName='חיה לב'

		select o.dataOfOrder,m.nameMachin,d.[count],m.priceToCustomer,m.percentageToCustomer,d.idOrderFromCustomer
        from OrdersFromCustomers o join DalitsOrderFromCustomer d
        on o.id=d.idOrderFromCustomer join MachinAndParties m
        on d.idMachin=m.id
        where 
        order by  d.IdOrderFromProvider
		
		update  MachinAndParties
set countOfStrock=countOfStrock+6
where id=(select id
from MachinAndParties
where nameMachin='מטהרי מים')



		select a.fullName,a.dateOrderFromProvider as [date],a.id from
        (select o.dateOrderFromProvider,p.fullName,o.id
        from OrdersFromProviders o join providers p
        on o.idProvider=p.id)a
        where a.fullName=' יוסי כהן '

		select*from providers
				select*from OrdersFromProviders
select*from DalitsOrderFromProviders

select o.dateOrderFromProvider,m.nameMachin,d.countToOrder,m.priceFromProvide,m.percentageFromProvide,d.IdOrderFromProvider
        from OrdersFromProviders o join DalitsOrderFromProviders d
        on o.id=d.IdOrderFromProvider join MachinAndParties m
        on d.idMachin=m.id
        where o.dateOrderFromProvider='Wed Sep 30 2020 16:12:39 GMT+0300 (שעון ישראל (קיץ))'and o.idProvider=1
        order by  d.IdOrderFromProvider

		select * from providers
		where fullName=' לוי שוקי'


		select DISTINCT c.fullName,c.id
        from OrdersFromCustomers o join [dbo].Customers c
        on c.id=o.idCustomer

		select o.dataOfOrder,m.nameMachin,d.[count],m.priceFromProvide,m.percentageFromProvide,d.idOrderFromCustomer
        from OrdersFromCustomers o join DalitsOrderFromCustomer d
        on o.id=d.idOrderFromCustomer join MachinAndParties m
        on d.idMachin=m.id
        where o.dataOfOrder='Wed Sep 30 2020 16:19:58 GMT+0300 (שעון ישראל (קיץ))'and o.idCustomer=1
        order by  d.idOrderFromCustomer

		select  * from DalitsOrderFromCustomer
		select  * from OrdersFromCustomers


		select o.dateOrderFromProvider,m.nameMachin,d.countToOrder,m.priceFromProvide,m.percentageFromProvide,d.IdOrderFromProvider
        from OrdersFromProviders o join DalitsOrderFromProviders d
        on o.id=d.IdOrderFromProvider join MachinAndParties m
        on d.idMachin=m.id
        where o.dateOrderFromProvider='Wed Sep 30 2020 16:13:24 GMT+0300 (שעון ישראל (קיץ))' and o.idProvider=2
        order by  d.IdOrderFromProvider
	
select  top 1  p.bateTotal from
[dbo].[PayToProviders] p 
where p.idOrderFromProvider=6
order by p.bateTotal 
	select o.dateOrderFromProvider,m.nameMachin,d.countToOrder,m.priceFromProvide,m.percentageFromProvide,d.IdOrderFromProvider
        from OrdersFromProviders o join DalitsOrderFromProviders d
        on o.id=d.IdOrderFromProvider join MachinAndParties m
        on d.idMachin=m.id
        where o.dateOrderFromProvider=Wed Sep 30 2020 16:12:39 GMT+0300 (שעון ישראל (קיץ)) and o.idProvider=${req.body.myid}
        order by  d.IdOrderFromProvider




		select c.*,o.dataOfOrder,m.nameMachin
		from Customers c join OrdersFromCustomers o
		on o.idCustomer=c.id join VisiteOfCustomer v
		on v.idOrderFromCustomer=o.id join DalitsOrderFromCustomer d
		on v.idOrderFromCustomer=d.idOrderFromCustomer join MachinAndParties m
		on m.id=d.idMachin 
	where m.isFilter='true'
		order by fullName

				select nameFilter from filterim

 				select* from VisiteOfCustomer
				select distinct * 
				from MachinAndParties
				where isFilter='true'


	declare @d date
	select * from VisiteOfCustomer
		select * from DalitsOrderFromCustomer

	insert into AgoVisiteOfCustomer(idOrderFromCustomer,dateOrderFromCustomer,nameFilter,cost,[count])
	select top 1  idOrderFromCustomer,dateOrderFromCustomer,nameFilter,cost,[count] from VisiteOfCustomer
	where idOrderFromCustomer=1 and dateOrderFromCustomer='10/21/2019' and nameFilter='תפוח'
	delete TOP(1)  from VisiteOfCustomer
	where idOrderFromCustomer=1 and dateOrderFromCustomer='10/21/2019' and nameFilter='תפוח' 
	



	select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id 
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join VisiteOfCustomer v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
and cast (v.dateOrderFromCustomer as date)<= dateadd(day,30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
and cast (v.dateOrderFromCustomer as date)> =dateadd(day,-30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
select CAST(v.dateOrderFromCustomer as datetime)
from VisiteOfCustomer v
select* from VisiteOfCustomer v
where v.count=0
select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id 
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join VisiteOfCustomer v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
and cast (v.dateOrderFromCustomer as date)>= dateadd(day,-31,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
order by v.dateOrderFromCustomer


select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join VisiteOfCustomer v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
and v.dateOrderFromCustomer < = dateadd(day,-31,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))



select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,v.dateOrderFromCustomer 
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join VisiteOfCustomer v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'



select dateadd(day,30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
select dateadd(day,-30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
select	new date('2020-10-03') 
	declare @d nvarchar(100)
	set @d='20.10.2020'

	select CAST ('9/20/2020' as date)
	


	select c.*,v.dateOrderFromCustomer as d ,m.*,v.count, v.cost,o.id as idOrderFromCustomer
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join VisiteOfCustomer v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
   and cast (v.dateOrderFromCustomer as date)>= dateadd(day,-31,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
   and cast (v.dateOrderFromCustomer as date)<= dateadd(day,30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
  and cast (v.dateOrderFromCustomer as date)> =dateadd(day,-30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
  ORDER BY CONVERT(DATE, v.dateOrderFromCustomer) ASC

   order by d (start_date,"%d-%m-%Y")

   if '12/21/2020'>'11/1/2019'
   select 'true'
   else select 'false'


--	select *from VisiteOfCustomer

--DECLARE @DataSource1 TABLE
--(id INT,
--fullName nvarchar(20),
--phone nvarchar(20),
--address nvarchar(20),
--city nvarchar(20),
--email nvarchar(50),
--dataOrderFromCustomer nvarchar(30),
--idMachin int,
--nameMachin nvarchar(20),
--describe nvarchar(100),
--idProvider int,
--priceFroomProvide int,
--precentageFromProvide int,
--priceToCustomer int,
--precentageToCustomer int,
--countOfStrock int,
--isFilter varchar(5),
--[count] int,
--cost int,
--idOrder int
--);

--INSERT INTO @DataSource1 (id ,fullName ,phone,address,city,email,dataOrderFromCustomer,idMachin,nameMachin,describe,idProvider,priceFroomProvide,
--precentageFromProvide,priceToCustomer,precentageToCustomer ,countOfStrock,isFilter,[count],cost,idOrder)
--select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id
--    from Customers c join OrdersFromCustomers o
--    on o.idCustomer=c.id join VisiteOfCustomer v
--    on v.idOrderFromCustomer=o.id  join MachinAndParties m
--    on m.nameMachin=v.[nameFilter]
--    where m.isFilter='true'
--and cast (v.dateOrderFromCustomer as date)<= dateadd(day,30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
--and cast (v.dateOrderFromCustomer as date)> =dateadd(day,-30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))

--DECLARE @DataSource2 TABLE
--(id INT,
--fullName nvarchar(20),
--phone nvarchar(20),
--address nvarchar(20),
--city nvarchar(20),
--email nvarchar(50),
--dataOrderFromCustomer nvarchar(30),
--idMachin int,
--nameMachin nvarchar(20),
--describe nvarchar(100),
--idProvider int,
--priceFroomProvide int,
--precentageFromProvide int,
--priceToCustomer int,
--precentageToCustomer int,
--countOfStrock int,
--isFilter varchar(5),
--[count] int,
--cost int,
--idOrder int
--);

--INSERT INTO @DataSource2 (id ,fullName ,phone,address,city,email,dataOrderFromCustomer,idMachin,nameMachin,describe,idProvider,priceFroomProvide,
--precentageFromProvide,priceToCustomer,precentageToCustomer ,countOfStrock,isFilter,[count],cost,idOrder)
--select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id
--    from Customers c join OrdersFromCustomers o
--    on o.idCustomer=c.id join VisiteOfCustomer v
--    on v.idOrderFromCustomer=o.id  join MachinAndParties m
--    on m.nameMachin=v.[nameFilter]
--    where m.isFilter='true'
	


--	DECLARE @Nunber1 int
--    SET @Nunber1 = 1
--	DECLARE @Nunber2 int
--    SET @Nunber2 = 1
--    DECLARE @flag int
--    SET @flag =0
--WHILE (select top 1 id from @DataSource1) > = @Nunber1
--BEGIN
--set @flag=0
--WHILE (SELECT top 1 id from @DataSource2) > = @Nunber2
--BEGIN
--if(select dataOrderFromCustomer from @DataSource1
--where idOrder=@Nunber1)<=
--(SELECT two.dataOrderFromCustomer 
--from @DataSource1 one join (select *, Row_number() over(order by dataOrderFromCustomer) as f from @DataSource2 )two
--on one.idOrder=two.idOrder
-- where  two.f=@Nunber2

--)
--begin 
--set @flag=1
--end
--else
--begin
--set @flag=0
--break
--end
--Set @Nunber2 = @Nunber2 + 1
--end
--if @flag=1

--select * from @DataSource1
--where idOrder=@Nunber1 and dataOrderFromCustomer !=''
--else
--print 'no'
--Set @Nunber1 = @Nunber1 + 1
--end
   
	

-----gogel
--DECLARE @DataSource TABLE
--(
--    [ITEM_CODE] VARCHAR(12)
--);

--INSER INTO @DataSource ([ITEM_CODE])
--SELECT ITEM_CODE  //While loop must execute the count of this rows
--FROM   'TABLE_1'
--WHERE  ITEM_AVAILABILITY = 'TRUE';

--DECLARe @CurrentItemCode VARCHAR(12);

--WHILE(EXISTS (SELECT 1 FROM @DataSource))
--BEGIN;

--    SELECT  TOP 1 @CurrentItemCod = [ITEM_CODE] 
--    FROM @DataSource

--    --



--    --

--    DELETE FROM @DataSource
--    WHERE [ITEM_CODE] = @CurrentItemCod;

--END;
--The idea is to perform a loop while th
select a.id as IdOrder ,a.dateOrderFromCustomer as dateOrder ,a.nameFilter as nameMachin,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,  a.cost as cost ,a.[count] as countToOrder from AgoVisiteOfCustomer a
join OrdersFromCustomers o 
on a.idOrderFromCustomer=o.id join MachinAndParties m
on m.nameMachin=a.nameFilter
where o.idCustomer=15
order by a.id desc 
select * from AgoVisiteOfCustomer

select o.idCustomer, o.dataOfOrder as dateOrder,m.nameMachin as nameMachin,d.[count] as countToOrder,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,d.idOrderFromCustomer as IdOrder
        from OrdersFromCustomers o join DalitsOrderFromCustomer d
        on o.id=d.idOrderFromCustomer join MachinAndParties m
        on d.idMachin=m.id
        order by  d.idOrderFromCustomer desc


		select DISTINCT o.dataOfOrder as dateOrder,m.nameMachin as nameMachin
        from OrdersFromCustomers o join DalitsOrderFromCustomer d
        on o.id=d.idOrderFromCustomer join MachinAndParties m
        on d.idMachin=m.id 
		where o.idCustomer=15
		UNION
	   select   a.dateOrderFromCustomer,a.nameFilter 
	   from AgoVisiteOfCustomer a join OrdersFromCustomers o
	   on o.id=a.idOrderFromCustomer 
	  where o.idCustomer=15



select*from AgoVisiteOfCustomer

select*from OrdersFromCustomers
select*from Customers

select o.dataOfOrder from OrdersFromCustomers o
join DalitsOrderFromCustomer d
on d.idOrderFromCustomer=o.id join MachinAndParties m
on m.id=d.idMachin
where o.idCustomer=13 and m.nameMachin='רב קו'
union
select o.dataOfOrder 
from VisiteOfCustomer a join OrdersFromCustomers o
on a.idOrderFromCustomer=o.id join MachinAndParties m
on m.nameMachin=a.nameFilter
where o.idCustomer=15 and m.nameMachin='פילטור'


 select *
   from VisiteOfCustomer a join OrdersFromCustomers o
   on a.idOrderFromCustomer=o.id join MachinAndParties m
   on m.nameMachin=a.nameFilter
   where o.idCustomer=15 and m.nameMachin='פילטור'

   select o.dataOfOrder 
   from OrdersFromCustomers o
   join DalitsOrderFromCustomer d
   on d.idOrderFromCustomer=o.id join MachinAndParties m
   on m.id=d.idMachin
   where o.idCustomer=15 and m.nameMachin='פילטור'

   select DISTINCT o.id,m.*
from OrdersFromCustomers o join DalitsOrderFromCustomer d
on o.id=d.idOrderFromCustomer join MachinAndParties m
on d.idMachin=m.id 
 where o.idCustomer=15
 UNION
 select DISTINCT o.id,m.*
 from VisiteOfCustomer v join OrdersFromCustomers o 
 on o.id=v.idOrderFromCustomer join
 MachinAndParties m
 on v.nameFilter=m.nameMachin 
where o.idCustomer=15


select*from OrdersFromCustomers
select*from AgoVisiteOfCustomer

select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id as idOrderFromCustomer
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join VisiteOfCustomer v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
and CAST(v.dateOrderFromCustomer AS DATE)<= dateadd(day,30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1 as nvarchar(4)) as nvarchar))
and cast (v.dateOrderFromCustomer AS DATE)> =dateadd(day,-30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1 as nvarchar(4)) as nvarchar))
ORDER BY CONVERT(DATE, v.dateOrderFromCustomer) ASC


--where   DateOn >= CAST(CONVERT(NVARCHAR, CAST(v.dateOrderFromCustomer AS DATE)))
--        AND DateOff <= CAST(CONVERT(NVARCHAR, CAST(GETDATE() AS DATE))
--        + '23:59:01' AS DATETIME)
--if(cast ('01/09/2020' as date)<= dateadd(day,30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar)))
--select '01/09/2020'
--else select dateadd(day,-30,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
select *from AgoVisiteOfCustomer
select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id as idOrderFromCustomer
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join VisiteOfCustomer v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
and CONVERT(date,v.dateOrderFromCustomer  )<= GETDATE()
and CONVERT (date,v.dateOrderFromCustomer )> =GETDATE()
ORDER BY CONVERT(DATE, v.dateOrderFromCustomer) ASC
select  v.dateOrderFromCustomer from VisiteOfCustomer v



select d.id, o.dataOfOrder as dateOrder,m.nameMachin as nameMachin,d.[count] as countToOrder,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,d.idOrderFromCustomer as IdOrder,m.isFilter,o.idCustomer
        from OrdersFromCustomers o join DalitsOrderFromCustomer d
        on o.id=d.idOrderFromCustomer join MachinAndParties m
        on d.idMachin=m.id 
  where  o.dataOfOrder='Sun Oct 28 2018 02:00:00 GMT+0200 (שעון ישראל (חורף))'and o.idCustomer=11

	
		
		select  d.id,sum(a.ArrivaCount) as countArrival
		  from OrdersFromCustomers o join DalitsOrderFromCustomer d
        on o.id=d.idOrderFromCustomer join MachinAndParties m
        on d.idMachin=m.id left join OrderArrival a
		on a.idDitelsOrderFromProvider=d.id
where  o.dataOfOrder='Nov 04 2020 11:16:56 GMT+0200 (שעון ישראל (חורף))'and o.idCustomer=
  group by d.id
		

		select* from OrderArrival

insert into OrderArrival  VALUES
 ( 27,'2020-11-08T09:24:09.525Z',1,0 )

 select* from OrdersFromCustomers
 order by id
 select * from DalitsOrderFromCustomer 
 order by idOrderFromCustomer
 select* from MachinAndParties

 
DELETE FROM DalitsOrderFromCustomer
WHERE idOrderFromCustomer = 5

DELETE FROM OrdersFromCustomers
WHERE id = 5

update DalitsOrderFromCustomer
 set [count]=4
 where id=2

 update DalitsOrderFromCustomer
 set [count]=4
 where id=2

 select* from VisiteOfCustomer 
  select* from AgoVisiteOfCustomer 

  select d.id,o.dataOfOrder as dateOrder,m.nameMachin as nameMachin,d.[count] as countToOrder,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,d.idOrderFromCustomer as IdOrder,m.isFilter,
        o.idCustomer as idMan,d.[finalPrice]
        from OrdersFromCustomers o join DalitsOrderFromCustomer d
        on o.id=d.idOrderFromCustomer join MachinAndParties m
        on d.idMachin=m.id
  where Mon Nov 09 2020 13:09:29 GMT+0200 (שעון ישראל (חורף)) o.idCustomer=4
  select *from OrdersFromProviders
  select *from DalitsOrderFromProviders



  select  top 1 p.bateTotal  from
        PayToProviders   p
      where idOrderFromProvider=1
        ORDER BY p.bateTotal 


		select* from DalitsOrderFromCustomer
		select*from OrdersFromCustomers
		select* from PayFromCustomer

		select*from OrdersFromCustomers where id=1034

		select a.id as IdOrder ,a.dateOrderFromCustomer as dateOrder ,a.nameFilter as nameMachin,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,  a.cost as finalPrice ,a.[count] as countToOrder,a.nameFilterAgo from AgoVisiteOfCustomer a
   join OrdersFromCustomers o 
   on a.idOrderFromCustomer=o.id join MachinAndParties m
   on m.nameMachin=a.nameFilter7
   where o.idCustomer=7

   union 
   select v.id as IdOrder ,v.dateOrderFromCustomer as dateOrder ,v.nameFilter as nameMachin,m.priceToCustomer as priceOfSingel,m.percentageToCustomer as percentageOfSingel,  v.cost as finalPrice ,v.[count] as countToOrder,v.nameFilterAgo from VisiteOfCustomer v
   join OrdersFromCustomers o 
   on v.idOrderFromCustomer=o.id join MachinAndParties m
   on m.nameMachin=v.nameFilter
   where o.idCustomer=7
   order by  v.id desc

   select c.id,c.dateOfCorrection as date,c.nameMachin,co.descriptionCorrection,c.price as finalPrice from CorrectionOfCustomer c
   join OrdersFromCustomers o
   on o.id=c.idOrderFromCustomer join Correction co
   on co.id=c.idCorrection
   where o.idCustomer=1

    select * from CorrectionOfCustomer
      select c.* from CorrectionOfCustomer c
   join OrdersFromCustomers o
   on o.id=c.idOrderFromCustomer
   where o.idCustomer=1
   select*from Customers
         select*from OrdersFromCustomers where idCustomer=8

   select*from DalitsOrderFromCustomer
   
   select c.*,v.dateOrderFromCustomer,m.*,v.count, v.cost,o.id as idOrderFromCustomer
    from Customers c join OrdersFromCustomers o
    on o.idCustomer=c.id join VisiteOfCustomer v
    on v.idOrderFromCustomer=o.id  join MachinAndParties m
    on m.nameMachin=v.[nameFilter]
    where m.isFilter='true'
and cast (v.dateOrderFromCustomer as date)< =dateadd(day,-31,cast (cast(month(GETDATE())as nvarchar(2)) +'/'+CAST( day(GETDATE())as nvarchar(2)) +'/'+cast(year(GETDATE())-1as nvarchar(4)) as nvarchar))
ORDER BY CONVERT(DATE, v.dateOrderFromCustomer) ASC 

select * from VisiteOfCustomer
select*from AgoVisiteOfCustomer

update DalitsOrderFromCustomer 
set [count]=1, [finalPrice]=1200
where id=25
	
