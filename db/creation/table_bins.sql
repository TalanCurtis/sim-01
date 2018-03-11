-- Make Table
create table s1_bins (
bin_id varchar(80),
shelf_id varchar(80),
name varchar(80),
price INTEGER,
image text
);

--  insert
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('A1', 'A' , 'Hat', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('A2', 'A' , null, null, null);
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('A3', 'A' , 'Cheese', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('A4', 'A' , null , null , null);
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('A5', 'A' , 'Ball', 500 , 'https://robohash.org/4');
--
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('B1', 'B' , 'Hat', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('B2', 'B' , null, null, null);
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('B3', 'B' , 'Cheese', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('B4', 'B' , null , null , null);
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('B5', 'B' , 'Ball', 500 , 'https://robohash.org/4');
--
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('C1', 'C' , 'Hat', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('C2', 'C' , null, null, null);
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('C3', 'C' , 'Cheese', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('C4', 'C' , null , null , null);
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('C5', 'C' , 'Ball', 500 , 'https://robohash.org/4');
--
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('D1', 'D' , 'Hat', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('D2', 'D' , null, null, null);
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('D3', 'D' , 'Cheese', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('D4', 'D' , null , null , null);
INSERT into s1_bins (bin_id , shelf_id, name, price, image) values('D5', 'D' , 'Ball', 500 , 'https://robohash.org/4');



-- ---------------------------------------------

--  insert
INSERT into s1_bins (bin , shelf_id, name, price, image) values(1, 'A' , 'Hat', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(2, 'A' , 'tent', 300 , 'https://robohash.org/2');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(3, 'A' , 'Cheese', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(4, 'A' , '', null , null);
INSERT into s1_bins (bin , shelf_id, name, price, image) values(5, 'A' , 'Ball', 500 , 'https://robohash.org/4');

INSERT into s1_bins (bin , shelf_id, name, price, image) values(1, 'B' , 'Cow', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(2, 'B' , 'Rat', 300 , 'https://robohash.org/2');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(3, 'B' , 'Jump', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(4, 'B' , '', null , null);
INSERT into s1_bins (bin , shelf_id, name, price, image) values(5, 'B' , 'Lazer', 500 , 'https://robohash.org/4');

INSERT into s1_bins (bin , shelf_id, name, price, image) values(1, 'C' , 'Mouse', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(2, 'C' , 'Flat', 300 , 'https://robohash.org/2');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(3, 'C' , 'Tire', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(4, 'C' , '', null , null);
INSERT into s1_bins (bin , shelf_id, name, price, image) values(5, 'C' , 'Clop', 500 , 'https://robohash.org/4');

INSERT into s1_bins (bin , shelf_id, name, price, image) values(1, 'D' , 'Slam', 200 , 'https://robohash.org/1');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(2, 'D' , 'Hoop', 300 , 'https://robohash.org/2');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(3, 'D' , 'Lard', 400 , 'https://robohash.org/3');
INSERT into s1_bins (bin , shelf_id, name, price, image) values(4, 'D' , '', null , null);
INSERT into s1_bins (bin , shelf_id, name, price, image) values(5, 'D' , 'Brick', 500 , 'https://robohash.org/4');

