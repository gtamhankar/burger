create database burgers_db;

CREATE TABLE burgers (
    ID int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    `devoured` tinyint(1) NOT NULL,
    PRIMARY KEY (ID)
);

