select a.fullName,a.dataOfOrder as [date],a.id from
        (select o.dataOfOrder,c.fullName,o.id
        from OrdersFromCustomers o join Customers c
        on o.idCustomer=c.id)a
        where a.fullName='��� ���'





CREATE DataBase[waterClean]
select*from [dbo].[providers]
select*from [dbo].[machinAndParties]
select*from [dbo].[OrdersFromProviders]
select*from[dbo].[DalitsOrderFromProviders]
select*from[dbo].[OrderArrival]
select*from[dbo].[Strock]
select *from OrdersFromCustomers
select *from DalitsOrderFromCustomer
CREATE TABLE [dbo].[providers]                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	fullName [nvarchar](20)NOT NULL,
	phone [nvarchar](20)NOT NULL,
	[Address] [nvarchar](50) NULL,
	email [nvarchar](25)null
)

CREATE TABLE [dbo].[OrdersFromProviders]                                 
(
	id [int] IDENTITY(1,1) NOT NULL,
	idProvider int NOT NULL,
	
	dateOrderFromProvider [nvarchar](100) NOT NULL,
)

INSERT INTO [providers]
 VALUES
 (' ��� ����','������ 44','0583243470','b0583243470@gmail.com')
 INSERT INTO [providers]
 VALUES
 (' ���� ��� ','����� 44','088578588')

--�������� ������ ����� ������ ������ �� ������ �� ���� ��� �� �id �� ����
--��� ����� ����� ����� ���� �� ������� 
insert  into [dbo].[OrdersFromProviders] VALUES(1,GETDATE())

declare @idProvider Int 
 select @idProvider= id from [dbo].[providers] 
where fullName='��� ���'
insert  into [dbo].[OrdersFromProviders]  VALUES(@idProvider,GETDATE())

declare @idmachin Int 
 select @idmachin= id from[dbo].[machinAndParties]
where nameMachin='������'
insert into [DalitsOrderFromProviders] values(@@IDENTITY,@idmachin,5)


--�������� ����� ��� ��� �� �������� ���� ���� ��� ���
select m.nameMachin,p.fullName
 from [machinAndParties] m join Providers p
 on m.idProvied=p.id
where idProvied=(select  id from [dbo].[providers] 
where fullName='��� ���')


DECLARE @idProvider nvarchar(2)
SET @idProvider='1'

select *
from(
select p.fullName,m.nameMachin,m.idProvied 
from Providers p join MachinAndParties m
on p.id=m.idProvied) r
where r.idProvied=@idProvider

select DISTINCT p.fullName
from [dbo].[OrdersFromProviders] o join [dbo].[providers] p
on p.id=o.idProvider

select n.[dateOrderFromProvider]
from(select p.fullName,o.dateOrderFromProvider
from [dbo].[providers] p join [dbo].[OrdersFromProviders] o
on p.id=o.idProvider)n join [dbo].[providers]p
on p.fullName=n.fullName
where n.fullName='���� ���'

select *
from DalitsOrderFromProviders

DECLARE @name nvarchar(30)
SET @name=' ���� ��� '


select a.fullName,a.dateOrderFromProvider from
(select o.dateOrderFromProvider,p.fullName
from OrdersFromProviders o join providers p
on o.idProvider=p.id)a
where a.fullName=@name

select *
from
MachinAndParties 
where nameMachin='������ '


INSERT INTO [dbo].[providers]
  VALUES
 (' ���� ���� ','02258698','����� 45') 
  select @@IDENTITY

 select o.dateOrderFromProvider,m.nameMachin,d.countToOrder,m.priceFromProvide,m.percentageFromProvide,d.IdOrderFromProvider
        from OrdersFromProviders o join DalitsOrderFromProviders d
        on o.id=d.IdOrderFromProvider join MachinAndParties m
        on d.idMachin=m.id
        where o.dateOrderFromProvider='Mon Sep 07 2020 19:35:55 GMT+0300 (Israel Daylight Time)' and o.idProvider=2
  order by  o.dateOrderFromProvider

  insert into [dbo].[Strock] values()


  select  d.id,sum(a.ArrivaCount) as countArrival
      from OrdersFromProviders o join DalitsOrderFromProviders d
      on o.id=d.IdOrderFromProvider join MachinAndParties m
      on d.idMachin=m.id left join OrderArrivalFromProvider a
      on a.idDitelsOrderFromProvider=d.id
      where o.dateOrderFromProvider='${req.body.mydate}'and o.idProvider=${req.body.myid}
      group by d.id 