/* Replace with your SQL commands */
create TABLE users(
    id serial primary key,
    email varchar(50) unique,
    uname varchar(50) not null,
    fname varchar(50) not null,
    lname varchar(50) not null,
    password varchar(255) not null
);