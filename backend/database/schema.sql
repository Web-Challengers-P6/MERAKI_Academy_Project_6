CREATE DATABASE PROJECT6 ;
USE  PROJECT6;

create table user (
id INT AUTO_INCREMENT NOT NULL,
Username VARchar (255) UNIQUE,
Phone_number INT,
email VARchar (255) UNIQUE,
Password VARchar (255),
profileImg VARCHAR(255),
Primary Key (id)
);

create table trip (
id INT AUTO_INCREMENT NOT NULL,
tripName VARchar (255),
from VARchar (255),
to VARchar (255),
Image VARchar (255),
userId INT,
Price INT,
numbersite INT,
Category VARchar (255),
softDelete INT DEFAULT 0,
FOREIGN KEY (userId) REFERENCES user(id),
Primary Key (id)
);
