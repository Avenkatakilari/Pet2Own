PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS User_Details_Table;

CREATE TABLE User_Details_Table(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 name TEXT NOT NULL,
 email TEXT NOT NULL,
 Password Text NOT NULL,
 phonenumber INTEGER NOT NULL,
 Address TEXT NOT NULL,
 pincode INTEGER NOT NULL,
);

DROP TABLE IF EXISTS Pet_Table;

CREATE TABLE Pet_Table(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 name TEXT NOT NULL,
 Breed TEXT NOT NULL,
 Age INTEGER NOT NULL,
 From_Date INTEGER NOT NULL,
 End_Date INTEGER Not NULL,
);