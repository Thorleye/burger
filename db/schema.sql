CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id INTEGER(100) NOT NULL auto_increment,
burger_name VARCHAR(250) NOT NULL,
devoured BOOLEAN default false,
PRIMARY KEY (id)
);



