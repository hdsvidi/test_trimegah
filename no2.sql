CREATE TABLE student (
        id serial primary key,
        name varchar(20),
        parent_id int
);

CREATE TABLE parent (
        id serial primary key,
        name varchar(20)
)

SELECT 
s.Id, s.name, p.name as parent_name
FROM student AS s
LEFT JOIN parent as p
ON s.parent_id = p.Id
ORDER BY s.id;