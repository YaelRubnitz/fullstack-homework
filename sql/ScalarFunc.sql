Table: Disney_plus_titles
1.
Explanation: Selects the title and calculates the number of characters in each title using the LEN function.
Query:
select title, len(title) as Tlen from Disney_plus_titles;

2.
Explanation: Retrieves the directors' names and converts them to uppercase letters using the UPPER function.
Query:
select director, upper(director) as Udirector from Disney_plus_titles;

3.
Explanation: Filters titles that contain the letter "e" and were released between 2017 and 2019.
Query:
select * from Disney_plus_titles where (title like '%e%') and (release_year between 2017 and 2019);

4.
Explanation: Concatenates the director's name and cast names for movies/shows released between 2015 and 2020, ordered by their release year.
Query:
select concat(director,' ', cast) as players , release_year from Disney_plus_titles where (release_year between 2015 and 2020) order by release_year;

📦 Table: DsOne_orders
1.
Explanation: Displays the product name and the sales amount rounded to the nearest integer using the ROUND function.
Query:
select product_name, round(sales, 0) as sales from DsOne_orders;

2.
Explanation: Filters products whose sub-category starts with the letter "s", presenting the sub-category, product name, and unit cost rounded down using FLOOR.
Query:
select sub_category, product_name, floor(unit_cost) from DsOne_orders where sub_category like 's%';

3.
Explanation: Retrieves products that contain the letter "e" and have a name longer than 7 characters, ordered by name length in descending order.
Query:
select * from DsOne_orders where product_name like '%e%' and len(product_name) > 7 order by len(pro