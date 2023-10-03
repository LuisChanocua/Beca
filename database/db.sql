-- creando la bd
create database pbeca;
use pbeca;

create table estudiante(
    id int unsigned auto_increment primary key,
    apaterno varchar(20) not null,
    amaterno varchar(20) not null,
    nombre varchar(20) not null,
    edad varchar(2)
);

show tables;

describe estudiante;