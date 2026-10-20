<?php

use App\Http\Controllers\Api\ContactMessageController;
use App\Http\Controllers\Api\DownloadableFormController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SectorController;
use App\Http\Controllers\Api\SiteController;
use Illuminate\Support\Facades\Route;

Route::name('api.')->group(function () {
    Route::get('site', SiteController::class)->name('site');

    Route::get('products', [ProductController::class, 'index'])->name('products.index');

    Route::get('sectors', [SectorController::class, 'index'])->name('sectors.index');

    Route::get('forms', [DownloadableFormController::class, 'index'])->name('forms.index');
    Route::get('forms/{form}/download', [DownloadableFormController::class, 'download'])->name('forms.download');

    Route::post('contact', [ContactMessageController::class, 'store'])
        ->middleware('throttle:5,1')
        ->name('contact.store');
});
