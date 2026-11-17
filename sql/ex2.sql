-- Exercise 1
SELECT * 
FROM DsTwo_Ads_revenue1 
UNION ALL 
SELECT * 
FROM DsTwo_Ads_revenue2;

-- Exercise 2
SELECT * 
FROM DsTwo_Ads_revenue1 
UNION 
SELECT * 
FROM DsTwo_Ads_revenue2;

-- Exercise 3
SELECT [Campaign ID] 
FROM DsTwo_Ads_revenue1 
INTERSECT 
SELECT [Campaign ID] 
FROM DsTwo_Ads_revenue2;

-- Exercise 4
SELECT t.date, t.[Ad Type]
FROM (
    SELECT * 
    FROM DsTwo_Ads_revenue1 
    WHERE InventoryType = 'Format3'
    EXCEPT
    SELECT * 
    FROM DsTwo_Ads_revenue2
) AS t;

-- Exercise 5
SELECT t.date, t.[Ad Type]
FROM (
    SELECT * 
    FROM DsTwo_Ads_revenue1 
    WHERE InventoryType = 'Format3'
    INTERSECT
    SELECT * 
    FROM DsTwo_Ads_revenue2
) AS t;

-- Exercise 6
SELECT * 
FROM (
    SELECT * 
    FROM DsTwo_Ads_revenue1 
    UNION 
    SELECT * 
    FROM DsTwo_Ads_revenue2
) AS t 
WHERE t.Matched_Queries > 800000;