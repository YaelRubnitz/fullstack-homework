

summary_exercise_1_queries
-- ==========================================
-- Pokemon Table Exercises
-- ==========================================

-- Exercise 1: Present all the pokemons with the letter R in their name
SELECT * 
FROM pokemon 
WHERE name LIKE '%r%';


-- Exercise 2: Order all the pokemons by their weight in descending order
SELECT * 
FROM pokemon 
ORDER BY weight DESC;


-- Exercise 3: Present the pokemons' names in lowercase (Completed)
SELECT LOWER(name) AS lower_name 
FROM pokemon;


-- Exercise 4: Count the number of pokemons that are taller than 70 (Completed)
SELECT COUNT(*) AS count 
FROM pokemon 
WHERE height > 70;


-- ==========================================
-- DsOne_orders Table Exercises
-- ==========================================

-- General Check
SELECT * 
FROM [dbo].[DsOne_orders];


-- Exercise 1: Average days to ship for "Office Supplies" shipped in 2019
SELECT AVG(days_to_ship) AS avg 
FROM [dbo].[DsOne_orders] 
WHERE category = 'office supplies' 
  AND YEAR(ship_date) = 2019;


-- Exercise 2: Average length of products' names for orders placed on Monday
SELECT AVG(LEN(product_name)) 
FROM [dbo].[DsOne_orders] 
WHERE order_weekday = 'monday';


-- Exercise 3: City with the largest total sales amount (city, sales amount, state)
SELECT TOP 1 state, city, SUM(sales) AS total_sales
FROM [dbo].[DsOne_orders]
GROUP BY state, city
ORDER BY total_sales DESC;


-- Exercise 4: Customers with "C" in their name per city within the top state
SELECT city, state, COUNT(DISTINCT customer_id) AS customer_count
FROM [dbo].[DsOne_orders]
WHERE state = (
    SELECT TOP 1 state
    FROM [dbo].[DsOne_orders]
    WHERE customer_name LIKE '%c%'
    GROUP BY state
    ORDER BY COUNT(DISTINCT customer_id) DESC
)
AND customer_name LIKE '%c%'
GROUP BY city, state;


-- ==========================================
-- data_auto Tables Exercises
-- ==========================================

-- Exercise 1: Total cost of Ferrari ads placed on Sunday in November
-- (Your original query)
SELECT COUNT(*) AS count 
FROM [dbo].[data_auto_November]
WHERE [Day of Week] = 'sunday' 
  AND Advertiser = 'Ferrari';

-- Note: The question asks for "total cost", so if there is a cost/spend column (e.g. Cost / Spend), it would be:
-- SELECT SUM([Cost]) AS total_cost FROM [dbo].[data_auto_November] WHERE [Day of Week] = 'sunday' AND Advertiser = 'Ferrari';


-- Exercise 2: Union both tables (October & November) with UNION ALL and UNION (Completed)
SELECT * 
FROM [dbo].[data_auto_November]
UNION ALL
SELECT * 
FROM [dbo].[data_auto_October];

SELECT * 
FROM [dbo].[data_auto_November]
UNION
SELECT * 
FROM [dbo].[data_auto_October];

-- Theoretical Answer (Exercise 2 & 3):
-- 2. If UNION ALL and UNION return the exact same number of rows, it means there are NO duplicate rows between October and November.
-- 3. Based on that conclusion, performing INTERSECT between the 2 tables will return 0 rows (an empty result set), because there are no shared/identical rows between them.


-- Extra Query (INTERSECT check from your script)
SELECT * 
FROM [dbo].[data_auto_November]
INTERSECT 
SELECT * 
FROM [dbo].[data_auto_October];
בוצעו עיבוד וניתוח בקוד
