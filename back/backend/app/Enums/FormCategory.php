<?php

namespace App\Enums;

enum FormCategory: string
{
    case Claims = 'claims';
    case Apply = 'apply';
    case General = 'general';

    public function label(): string
    {
        return match ($this) {
            self::Claims => 'المطالبات',
            self::Apply => 'طلبات التأمين',
            self::General => 'نماذج عامة',
        };
    }

    /**
     * @return array<string, string>
     */
    public static function labels(): array
    {
        return collect(self::cases())
            ->mapWithKeys(fn (self $category) => [$category->value => $category->label()])
            ->all();
    }
}
