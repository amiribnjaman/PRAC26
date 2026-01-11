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
