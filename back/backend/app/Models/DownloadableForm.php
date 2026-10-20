<?php

namespace App\Models;

use App\Enums\FormCategory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * A printable form (claim, application, ...) offered for download.
 * Files live on the "local" disk, e.g. storage/app/private/forms/motor-claim.pdf.
 */
#[Fillable(['category', 'title', 'description', 'file_path', 'sort_order', 'is_active'])]
class DownloadableForm extends Model
{
    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'category' => FormCategory::class,
            'is_active' => 'boolean',
        ];
    }

    /**
     * Only active forms, in display order.
     */
    #[Scope]
    protected function published(Builder $query): void
    {
        $query->where('is_active', true)->orderBy('sort_order')->orderBy('id');
    }
}
