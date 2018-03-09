UPDATE s1_bins
set (name, price) = ($2, $3)
where id = $1 
returning *;