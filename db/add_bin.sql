INSERT into s1_bins ( bin_id, shelf_id, name, price, image) values( $1, $2, $3, $4, $5 )
returning *;