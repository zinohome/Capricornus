
CREATE TABLE `ogdbconnect` (
	`ogdb_id` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdb_name` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	PRIMARY KEY  `(ogdb_id`) 
)COLLATE utf8mb4_general_ci DEFAULT CHARSET=utf8mb4 ENGINE=InnoDB


CREATE TABLE `ogdbuser` (
	`ogdbuser_id` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdbuser_name` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdbuser_password` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdbuser_active` VARCHAR(10) COLLATE utf8mb4_general_ci NOT NULL, 
	`ogdb_id` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL, 
	PRIMARY KEY  `(ogdbuser_id`) 
)COLLATE utf8mb4_general_ci DEFAULT CHARSET=utf8mb4 ENGINE=InnoDB


CREATE TABLE `sysuser` (
	`sysuser_id` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, 
	`sysuser_name` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, 
	`sysuser_password` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, 
	`sysuser_role` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, 
	`sysuser_isactive` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, 
	`sysuser_nickname` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, 
	PRIMARY KEY  `(sysuser_id`) 
)COLLATE utf8mb4_general_ci DEFAULT CHARSET=utf8mb4 ENGINE=InnoDB

