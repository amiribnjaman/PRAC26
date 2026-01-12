-- PostgreSQL Practice Database Creation Script
CREATE DATABASE prac_db;


-- Create a table for storing employee information
CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hire_date DATE,
    salary NUMERIC(10)
);

-- Create a table for storing staff information
CREATE TABLE staff (
    staff_id SERIAL PRIMARY KEY,
    full_name VARCHAR(50),
    email VARCHAR(50),
    department VARCHAR(50)
);


-- Insert sample data into the employees table
INSERT INTO 
    employees (first_name, last_name, hire_date, salary)
    VALUES 
    ('John', 'Doe', '2020-01-15', 60000),
    ('Jane', 'Smith', '2019-03-22', 75000),
    ('Emily', 'Johnson', '2021-07-30', 50000);

-- Insert sample data into the staff table
INSERT INTO 
    staff (full_name, email, department)
    VALUES 
    ('Alice Brown', 'alice.brown@example.com', 'HR');


-- Query to retrieve all records from the employees table
SELECT * FROM employees;

-- Query to retrieve all records from the staff table
SELECT * FROM staff;

-- Query to find employees with the first name 'John'
SELECT * FROM exployees WHERE first_name = 'John';

-- Query to find employees with a salary greater than 20000
SELECT first_name, last_name FROM employees WHERE salary > 20000;



-- Add a new column 'department' to the employees table
ALTER TABLE employees ADD COLUMN department VARCHAR(50);


-- Update the department for an employee
UPDATE employees SET salary = 100000 WHERE email = 'alice.brown@example.com';


-- Remove the department column from the staff table
ALTER TABLE staff DROP COLUMN department;

-- Delete an employee record with employee_id = 2
DELETE FROM employees WHERE employee_id = 2;

-- Drop the staff table
DROP TABLE staff;

-- Query to retrieve distinct departments from the employees table
SELECT DISTINCT department FROM employees;

-- Query to count the number of distinct departments in the employees table
SELECT COUNT (DISTINCT department) FROM employees;

-- Query to order employees by salary in ascending and descending order
SELECT * FROM employees ORDER BY salary;

-- Query to order employees by salary in descending order
SELECT * FROM employees ORDER BY salary DESC;

-- Query to paginate results: Retrieve 20 records starting from the 10th record
SELECT * FROM employees LIMIT 20 OFFSET 10;

-- Query to find the minimum and maximum salary in the employees table
SELECT MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM employees;


-- Query to calculate total number of customers, average salary, and total salary
SELECT COUNT(customer_id) AS total_customers,
         AVG(salary) AS average_salary,
         SUM(salary) AS total_salary;



-- Query to find employees whose first name starts with 'J'
SELECT * FROM employees WHERE first_name LIKE 'J%';


-- Query to find employees whose first name contains the letter 'j'
SELECT * FROM employees WHERE first_name LIKE '%j%';

-- Query to find employees whose first name contains the letter 'J' (case-insensitive)
SELECT * FROM employees WHERE first_name ILIKE '%J%';


-- Query to get the current date and time
SELECT NOW() AS current_timestamp;

-- Query to find Department names that are either 'HR' or 'IT'
SELECT * FROM employees WHERE department IN ('HR', 'IT');


-- Query to find Department names that are neither 'HR' nor 'IT'
SELECT * FROM employees WHERE department NOT IN ('HR', 'IT');

-- Query to find employees in departments where the salary is greater than 50000
SELECT * FROM employees WHERE department IN (SELECT department FROM employees WHERE salary > 50000);