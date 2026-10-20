<?php

namespace App\Enums;

enum ProductType: string
{
    case Personal = 'personal';
    case Business = 'business';

    public function label(): string
    {
        return match ($this) {
            self::Personal => 'تأمين الأفراد',
            self::Business => 'تأمين الشركات',
        };
    }
}
