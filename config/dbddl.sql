
CREATE TABLE `ogdb` (
	`ogdb_id` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdb_name` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	PRIMARY KEY  `(ogdb_id`) 
)DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci ENGINE=InnoDB


CREATE TABLE `ogdbuser` (
	`ogdbuser_id` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdbuser_name` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdbuser_password` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdbuser_active` TINYINT(1) NOT NULL, 
	`ogdb_id` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL
)DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci ENGINE=InnoDB


CREATE TABLE `sysuser` (
	`userid` BIGINT NOT NULL AUTO_INCREMENT, 
	`username` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`userpass` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`nickname` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`userrole` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'user', 
	PRIMARY KEY  `(userid`) 
)DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci ENGINE=InnoDB

