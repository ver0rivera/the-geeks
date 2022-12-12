-- WARNING: depending on yout database admin you may need 
-- to delimiter in order to execute this script.

-- EXAMPLE:
    -- DELIMITER $$;
    -- CREATE PROCEDURE getCourses()
    -- BEGIN
    -- 	SELECT id, description, slug, semester_id
    --     FROM library_course;
    -- END $$

DELIMITER $$

CREATE PROCEDURE getCourses()
BEGIN
	SELECT id, description, slug, semester_id
    FROM library_course;
END$$


CREATE PROCEDURE getSemesters()
BEGIN
	SELECT semester_number, career_id
    FROM library_semester;
END$$

DELIMITER ;
