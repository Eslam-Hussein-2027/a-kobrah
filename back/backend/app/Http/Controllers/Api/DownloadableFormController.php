<?php

namespace App\Http\Controllers\Api;

use App\Enums\FormCategory;
use App\Http\Controllers\Controller;
use App\Http\Resources\DownloadableFormResource;
use App\Models\DownloadableForm;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DownloadableFormController extends Controller
{
    /**
     * List downloadable forms with their category labels.
     */
    public function index(): AnonymousResourceCollection
    {
        return DownloadableFormResource::collection(DownloadableForm::published()->get())
            ->additional(['meta' => ['categories' => FormCategory::labels()]]);
    }

    /**
     * Download the file attached to a form.
     */
    public function download(DownloadableForm $form): StreamedResponse
    {
        $disk = Storage::disk('local');

        abort_unless($form->is_active && $form->file_path && $disk->exists($form->file_path), 404, 'الملف غير متوفر حاليًا.');

        $extension = pathinfo($form->file_path, PATHINFO_EXTENSION);

        return $disk->download($form->file_path, $form->title.($extension ? '.'.$extension : ''));
    }
}
