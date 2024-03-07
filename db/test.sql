-- test query -- ignore it
DROP FUNCTION IF EXISTS test_query();
CREATE OR REPLACE FUNCTION test_query()
RETURNS text
AS
$$
    SELECT name FROM users WHERE email_address = 'jerichomanalo140@gmail.com' AND archived = false LIMIT 1;
$$
language sql;