/* Replace with your SQL commands */
create extension if not exists "uuid-ossp";
create TABLE users(
    -- id serial primary key,
    id uuid default uuid_generate_v4() primary key,
    email varchar(50) unique,
    uname varchar(50) not null,
    fname varchar(50) not null,
    lname varchar(50) not null,
    password varchar(255) not null
);