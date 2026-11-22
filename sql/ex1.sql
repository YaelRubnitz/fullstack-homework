-- ==========================================
-- General Check
-- ==========================================
SELECT * 
FROM [dbo].[DsOne_orders];


-- ==========================================
-- DsOne_orders - Aggregate Functions Exercises
-- ==========================================

-- Exercise 1: Count the number of orders in each category
SELECT category, COUNT(order_id) AS count 
FROM [dbo].[DsOne_orders] 
GROUP BY category;


-- Exercise 2: Average days to ship for each month, ordered by average descending
SELECT avg(days_to_ship) AS avg 
FROM [dbo].[DsOne_orders] 
GROUP BY order_month 
ORDER BY avg DESC;


-- Exercise 3: Max unit cost for products purchased in October
SELECT MAX(unit_cost) AS max 
FROM [dbo].[DsOne_orders] 
WHERE order_month = 'October'; 


-- Exercise 4: Last order date in 2019 for each city in Illinois, ordered descending
SELECT city, MAX(order_date) AS last_order 
FROM [dbo].[DsOne_orders] 
WHERE (YEAR(order_date) = 2019) 
  AND ([state ] = 'illinois') 
GROUP BY city 
ORDER BY last_order DESC;


-- Exercise 5 & 6: Number of different products starting with 'M' per customer, having at least 2, ordered descending
SELECT customer_id, COUNT(DISTINCT product_name) AS count 
FROM [dbo].[DsOne_orders] 
WHERE product_name LIKE 'm%' 
GROUP BY customer_id 
HAVING COUNT(DISTINCT product_name) > 1 
ORDER BY count DESC;


-- Exercise 7: Minimum unit cost in each category, filtered under 1
SELECT category, MIN(unit_cost) AS min 
FROM [dbo].[DsOne_orders] 
GROUP BY category 
HAVING MIN(unit_cost) < 1;


-- Exercise 8 & 9: Monthly average sales for orders in Texas, ordered by month
SELECT order_month, AVG(sales) AS avg 
FROM [dbo].[DsOne_orders] 
WHERE state = 'texas' 
GROUP BY order_month 
ORDER BY order_month;


-- ==========================================
-- DsOne_returns - Aggregate Functions Exercises
-- ==========================================

-- Return Exercise 1: Count of returned orders per state, having more than 10 returns
SELECT state, COUNT(order_id) AS count 
FROM [dbo].[DsOne_orders] 
WHERE return_reason != 'not returned' 
GROUP BY state 
HAVING COUNT(order_id) > 10;


-- Return Exercise 2: Count of returned orders per category in Indiana, ordered descending
SELECT category, COUNT(order_id) AS count 
FROM [dbo].[DsOne_orders] 
WHERE return_reason != 'not returned' 
  AND state = 'indiana' 
GROUP BY category 
ORDER BY count DESC;