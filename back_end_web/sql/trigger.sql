
DELIMITER $$
CREATE TRIGGER delete_comment
    AFTER DELETE
    ON accounts_customuser FOR EACH ROW
BEGIN
    DELETE FROM library_comment
    WHERE email=(OLD.email);
END$$
DELIMITER ;