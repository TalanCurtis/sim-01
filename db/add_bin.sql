INSERT into s1_bins ( id ,bin , shelf_id, name, price, image) values( $1, $2, $3 , $4, $5 , $6)
returning *;