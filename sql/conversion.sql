
Description: Select all records from the table.
select * from DsOne_orders;

1.
Description: Extract and sort by the order day.
select DAY(order_date) as order_day from DsOne_orders order by order_day;

2.
Description: Get ship month for Office Supplies category.
select MONTH(ship_date) as ship_month from DsOne_orders where category = 'Office supplies';

3.
Description: Get order and ship months for Phones sub-category.
select MONTH(order_date) order_month, MONTH(ship_date) ship_month from DsOne_orders where sub_category ='Phones';

4.
Description: Calculate days between order and ship dates, ordered by difference.
select datediff(day,order_date,ship_date) diff from DsOne_orders order by diff;

5.
Description: Add 2 years to the order date.
select order_date, dateadd(year, 2, order_date) Two_Years from DsOne_orders;

6.
Description: Cast days to ship as CHAR for December shipments.
select ship_date,cast(days_to_ship as char) days_to_ship from DsOne_orders where MONTH(ship_