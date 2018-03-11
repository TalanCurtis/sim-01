UPDATE s1_shelves
set ($2) = ( $3)
where id = $1 
returning *;