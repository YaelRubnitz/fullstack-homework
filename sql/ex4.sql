
analytic_functions_queries
-- ==========================================
-- General Check
-- ==========================================
SELECT * 
FROM [dbo].[Olympic];


-- ==========================================
-- Olympic Table - Analytic vs. Aggregate Functions
-- ==========================================

-- Exercise 1: What is the average height of olympic participants for each sex?
-- Aggregate:
SELECT sex, AVG(height) AS avg 
FROM [dbo].[Olympic] 
GROUP BY sex;

-- Analytic:
SELECT *, AVG(height) OVER(PARTITION BY sex) AS avg  
FROM [dbo].[Olympic];


-- Exercise 2: Average height for each sex + overall average height
-- Analytic:
SELECT *, 
       AVG(height) OVER(PARTITION BY sex) AS avg_by_sex,  
       AVG(height) OVER() AS general_avg 
FROM [dbo].[Olympic];


-- Exercise 3: How many different olympic players participated in the olympics per NOC?
-- Aggregate:
SELECT noc, COUNT(DISTINCT player_id) AS unique_players 
FROM [dbo].[Olympic] 
GROUP BY noc;

-- Note (3.1): Why is it incorrect to solve this using an analytic function?
-- Analytic functions do not collapse rows into unique groups per NOC and do not support COUNT(DISTINCT ...) directly over a window partition to yield a single count per NOC without duplicates.


-- Exercise 4: First year in which each NOC participated (only NOCs after 2000)
-- Aggregate:
SELECT noc, MIN(year) AS first_year 
FROM [dbo].[Olympic] 
GROUP BY noc 
HAVING MIN(year) > 2000;

-- Analytic:
WITH FirstParticipation AS (
    SELECT noc, year, 
           ROW_NUMBER() OVER(PARTITION BY noc ORDER BY year ASC) AS rn
    FROM [dbo].[Olympic]
)
SELECT noc, year AS first_year
FROM FirstParticipation
WHERE rn = 1 
  AND year > 2000;


-- Exercise 5: Count the number of Gold medals won by each team and the total amount of gold medals won
-- Analytic:
SELECT team, 
       COUNT(medal) OVER(PARTITION BY team) AS gold_per_team,
       COUNT(medal) OVER() AS total_gold
FROM [dbo].[Olympic]
WHERE medal = 'Gold';


-- ==========================================
-- Analytic Function Only Exercise
-- ==========================================

-- Exercise 1: Count the number of gold medals won by each participant and the total amount per sex
SELECT name, sex,
       COUNT(medal) OVER(PARTITION BY name) AS gold_per_participant,
       COUNT(medal) OVER(PARTITION BY sex) AS total_gold_per_sex
FROM [dbo].[Olympic]
WHERE medal = 'Gold';
בוצעו עיבוד וניתוח בקוד
