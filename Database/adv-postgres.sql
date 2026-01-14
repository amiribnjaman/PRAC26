CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,  
    category_id INT REFERENCES categories(category_id)
)

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

-- Query to retrieve product details along with their category names
SELECT product_id, product_name, price, categories.category_name FROM Products
INNER JOIN categories ON products.category_id = categories.category_id;