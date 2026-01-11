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
    name VARCHAR(50),
    email VARCHAR(50),
    department VARCHAR(50)
)


