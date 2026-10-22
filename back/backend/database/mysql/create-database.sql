-- MySQL 8 setup for the a-kobrah website.
-- Run once as an admin user, e.g.:  mysql -u root -p < database/mysql/create-database.sql
-- Then create the tables with:      php artisan migrate --seed

-- utf8mb4 is required for Arabic text.
CREATE DATABASE IF NOT EXISTS a_kobrah
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Recommended on servers: a dedicated user instead of root.
-- Replace the password, then put the same values in .env (DB_USERNAME / DB_PASSWORD).
CREATE USER IF NOT EXISTS 'a_kobrah'@'localhost' IDENTIFIED BY 'change_me';
GRANT ALL PRIVILEGES ON a_kobrah.* TO 'a_kobrah'@'localhost';
FLUSH PRIVILEGES;
