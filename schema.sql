CREATE DATABASE IF NOT EXISTS blogvr_db;
USE blogvr_db;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'bryan'@'%' IDENTIFIED BY 'bryan123';
GRANT ALL PRIVILEGES ON blogvr_db.* TO 'bryan'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_device VARCHAR(255) NOT NULL,
    relase_date DATE NOT NULL,
    resolution_eye VARCHAR(255) NOT NULL,
    field_view INT NOT NULL,
    weight DECIMAL(5, 2) NOT NULL,
    relase_price DECIMAL(10, 2) NOT NULL 
);
