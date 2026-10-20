<?php

/*
|--------------------------------------------------------------------------
| Public Site Settings
|--------------------------------------------------------------------------
|
| Company details shown on the website (header, footer, contact page).
| Override any value from .env without touching code.
|
*/

return [

    'name' => 'العربية الكبرى للتأمين المساهمة',

    'name_en' => 'The Great Arabia Insurance Company',

    'phone' => env('SITE_PHONE', '+218 XX XXX XXXX'),

    'email' => env('SITE_EMAIL', 'info@a-kobrah.ly'),

    'address' => env('SITE_ADDRESS', 'المقر الرئيسي، ليبيا'),

    'hours' => env('SITE_HOURS', 'الأحد – الخميس | 8:00 ص – 3:00 م'),

    'map_query' => env('SITE_MAP_QUERY', 'العربية الكبرى للتأمين ليبيا'),

    'social' => [
        'facebook' => env('SITE_FACEBOOK_URL'),
        'instagram' => env('SITE_INSTAGRAM_URL'),
        'linkedin' => env('SITE_LINKEDIN_URL'),
    ],

    // Home page counters. Confirm the real figures with management before going live.
    'stats' => [
        ['value' => (int) env('SITE_STAT_YEARS', 15), 'prefix' => '+', 'label' => 'عامًا من الخبرة'],
        ['value' => (int) env('SITE_STAT_CLIENTS', 25000), 'prefix' => '+', 'label' => 'عميل يثق بنا'],
        ['value' => (int) env('SITE_STAT_BRANCHES', 30), 'prefix' => '+', 'label' => 'فرع ووكيل معتمد'],
        ['value' => (int) env('SITE_STAT_PRODUCTS', 14), 'prefix' => '', 'label' => 'منتجًا تأمينيًا'],
    ],

    // Inbox that receives a copy of every contact-form message (leave empty to only store in the database).
    'contact_recipient' => env('SITE_CONTACT_RECIPIENT'),

];
