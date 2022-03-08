CREATE DATABASE project6 ;
USE  project6;

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
TRIPfrom  VARchar (255),
TRIPto VARchar (255),
Image VARchar (255),
driverId INT,
Price INT,
numbersite INT,
Category VARchar (255),
softDelete INT DEFAULT 0,
FOREIGN KEY (driverId) REFERENCES user(id),
Primary Key (id)
);

create table rider (
id INT AUTO_INCREMENT NOT NULL,
riderid INT,
driverId INT,
softDelete INT DEFAULT 0,
FOREIGN KEY (riderid) REFERENCES user(id),
FOREIGN KEY (driverId) REFERENCES trip(driverId),
Primary Key (id)

);

-- DROP DATABASE PROJECT6;
