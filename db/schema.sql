DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS post_likes;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS staff;


Create TABLE staff(
    iD INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    staff_number VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
);

CREATE TABLE customers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    in_household INTEGER NOT NULL,
    package INTEGER NOT NULL,
    date_received DATE NOT NULL
);

CREATE TABLE post_likes (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    staff_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL
);

CREATE TABLE post (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    post_text VARCHAR(60) CHARACTER SET utf8,
    staff_id INTEGER
);

CREATE TABLE comments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR(60) CHARACTER SET utf8,
    staff_id INTEGER,
    post_id INTEGER
);



