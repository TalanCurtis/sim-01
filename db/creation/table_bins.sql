-- Make Table
create table s1_bins (
id SERIAL PRIMARY KEY,
bin varchar(80),
shelf_id INTEGER REFERENCES s1_shelves(id),
name varchar(80),
price INTEGER,
image text
);

--  insert data
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 1', 1 , 'Hat', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 2', 1 , 'tent', 300 , 'https://robohash.org/2');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 3', 1 , 'Cheese', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 4', 1 , '', null , null);
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 5', 1 , 'Ball', 500 , 'https://robohash.org/4');
select * from s1_bins;
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 1', 2 , 'Cow', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 2', 2 , 'Rat', 300 , 'https://robohash.org/2');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 3', 2 , 'Jump', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 4', 2 , '', null , null);
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 5', 2 , 'Lazer', 500 , 'https://robohash.org/4');
select * from s1_bins;
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 1', 3 , 'Mouse', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 2', 3 , 'Flat', 300 , 'https://robohash.org/2');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 3', 3 , 'Tire', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 4', 3 , '', null , null);
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 5', 3 , 'Clop', 500 , 'https://robohash.org/4');
select * from s1_bins;
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 1', 4 , 'Slam', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 2', 4 , 'Hoop', 300 , 'https://robohash.org/2');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 3', 4 , 'Lard', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 4', 4 , '', null , null);
INSERT into s1_bins (bin , shelf_id, name, price, image) values('Bin 5', 4 , 'Brick', 500 , 'https://robohash.org/4');
select * from s1_bins;

