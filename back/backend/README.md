# Backend — Laravel API

JSON API for the website of العربية الكبرى للتأمين المساهمة: site settings, insurance products, sectors,
downloadable forms and the contact form. See the [root README](../../README.md) for the full project guide.

```bash
composer install
cp .env.example .env && php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
php artisan serve        # http://127.0.0.1:8000/api/site

php artisan test         # API feature tests
vendor/bin/pint --test   # code style
```

Company details (phone, email, address, social links, stats) are set with the `SITE_*` variables in `.env`
— see `config/site.php`.
