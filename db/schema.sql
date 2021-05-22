CREATE TABLE customers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    in_household INTEGER NOT NULL,
    package INTEGER NOT NULL,
    date_received VARCHAR(30) NOT NULL