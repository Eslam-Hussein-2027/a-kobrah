<?php

namespace App\Http\Resources;

use App\Models\DownloadableForm;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin DownloadableForm */
class DownloadableFormResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'category' => $this->category->value,
            'category_label' => $this->category->label(),
            'title' => $this->title,
            'description' => $this->description,
            'download_url' => $this->file_path ? route('api.forms.download', $this->resource) : null,
        ];
    }
}
