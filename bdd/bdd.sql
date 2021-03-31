DROP TABLE Contact;
CREATE TABLE Contact(
    IdCon Integer primary key ,
    Nom VARCHAR(100),
    Mobile INTEGER,
    email VARCHAR(255),
    Societe VARCHAR(255),
    SiteE VARCHAR(255),
    Message VARCHAR(255)
);
Drop sequence serial;
CREATE SEQUENCE serial START 1;