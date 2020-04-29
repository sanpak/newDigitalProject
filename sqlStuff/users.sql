DROP TABLE IF EXISTS `paymeDb`.`users`;

CREATE TABLE `paymeDb`.`users` (
		user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(200) NOT NULL,
    user_url_name VARCHAR(200) NOT NULL,
    user_short_bio VARCHAR(1000) NOT NULL,
    user_picture VARCHAR(200) NOT NULL,
    PRIMARY KEY ( user_id )
);

DROP TABLE IF EXISTS `paymeDb`.`customers`;

CREATE TABLE `paymeDb`.`customers` (
	customer_id INT NOT NULL AUTO_INCREMENT,
    customer_email VARCHAR(200) NOT NULL,
    customer_first_name VARCHAR(200) NOT NULL,
    customer_last_name VARCHAR(200) NOT NULL,
    customer_bio VARCHAR(200) NOT NULL,
		customer_picture VARCHAR(200) NOT NULL,
		date_time_joined VARCHAR(200) NOT NULL,
    PRIMARY KEY ( customer_id )
);
