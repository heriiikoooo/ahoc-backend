--GET TOPICS
DROP FUNCTION IF EXISTS get_topics();
CREATE OR REPLACE FUNCTION get_topics()
  RETURNS TABLE 
  (
      pk int,
      title text,
      preacher text,
      image_url text,
      link_url text,
      highlights text,
      date text
  )
AS
$$
    SELECT
        pk,
        title,
        preacher,
        image_url,
        link_url,
        highlights,
        date
    FROM topics 
    WHERE archived = false
    ORDER BY date desc;
$$
language sql;



--GET EVENTS & SERVICES
DROP FUNCTION IF EXISTS get_events_and_services();
CREATE OR REPLACE FUNCTION get_events_and_services()
  RETURNS TABLE 
  (
      pk int,
      title text,
      image_url text,
      description text,
      date text
  )
AS
$$
    SELECT
        pk,
        title,
        image_url,
        description,
        date
    FROM services_and_events 
    WHERE archived = false
    ORDER BY date asc;
$$
language sql;



--GET TESTINONIALS
DROP FUNCTION IF EXISTS get_testimonials();
CREATE OR REPLACE FUNCTION get_testimonials()
  RETURNS TABLE 
  (
      pk int,
      fullname text,
      image_url text,
	  background_url text,
      testimony text,
      designation text
  )
AS
$$
    SELECT
        pk,
        fullname,
        image_url,
        background_url,
		testimony,
        designation
    FROM testimonials 
    WHERE archived = false
    ORDER BY pk asc;
$$
language sql;




--GET PARTNERS
DROP FUNCTION IF EXISTS get_partners();
CREATE OR REPLACE FUNCTION get_partners()
  RETURNS TABLE 
  (
      pk int,
      name text,
      logo_url text,
	  link text
  )
AS
$$
    SELECT
        pk,
        name,
        logo_url,
        link
    FROM partners 
    WHERE archived = false
    ORDER BY name asc;
$$
language sql;