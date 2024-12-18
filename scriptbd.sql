create table estudiantes(
id int auto_increment primary key, 
dni varchar(100),
nombre varchar (100),
apellido varchar(100),
email varchar(100)
);
create table profesores(
id int auto_increment primary key, 
dni varchar(100),
nombre varchar (100),
apellido varchar(100),
email varchar(100),
profesion varchar(100),
telefono varchar(50)
);

create table cursos(
id int auto_increment primary key,
nombre varchar(100),
descripcion text,
profesor_id int
);
alter table cursos 
add constraint cursos_profesores_fk 
foreign key (profesor_id) 
references profesores(id);

create table estudiantes_cursos(
curso_id int,
estudiante_id int,
primary key (curso_id,estudiante_id)
);

alter table estudiantes_cursos 
add constraint estudiantes_cursos_cursos_fk
foreign key (curso_id) references cursos(id);

alter table estudiantes_cursos 
add constraint estudiantes_cursos_estudiantes_fk
foreign key (estudiante_id) references estudiantes(id);







