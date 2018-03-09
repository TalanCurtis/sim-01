-- Make Table
create table s1_shelves (
id SERIAL Primary Key,
name varchar(80)
);
-- Insert Data
INSERT into s1_shelves (name) values('Shelf A');
INSERT into s1_shelves (name) values('Shelf B');
INSERT into s1_shelves (name) values('Shelf C');
INSERT into s1_shelves (name) values('Shelf D');
select * from s1_shelves;