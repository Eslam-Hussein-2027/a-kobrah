# Backend — Laravel API

JSON API for the website of العربية الكبرى للتأمين المساهمة: site settings, insurance products, sectors,
downloadable forms and the contact form. See the [root README](../../README.md) for the full project guide.

Database: **MySQL 8** (`utf8mb4`). Create it once, then set `DB_*` in `.env`:

```bash
mysql -u root -p < database/mysql/create-database.sql
```

```bash
composer install
cp .env.example .env && php artisan key:generate   # edit DB_USERNAME / DB_PASSWORD
php artisan migrate --seed
php artisan serve        # http://127.0.0.1:8000/api/site

php artisan test         # API feature tests (in-memory SQLite, no MySQL needed)
vendor/bin/pint --test   # code style
```

Company details (phone, email, address, social links, stats) are set with the `SITE_*` variables in `.env`
— see `config/site.php`.
