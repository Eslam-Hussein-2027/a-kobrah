<?php

namespace Tests\Feature\Api;

use App\Enums\FormCategory;
use App\Models\DownloadableForm;
use Database\Seeders\DownloadableFormSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class DownloadableFormApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_lists_forms_with_category_labels(): void
    {
        $this->seed(DownloadableFormSeeder::class);

        $this->getJson('/api/forms')
            ->assertOk()
            ->assertJsonCount(10, 'data')
            ->assertJsonPath('data.0.category', 'claims')
            ->assertJsonPath('data.0.category_label', 'المطالبات')
            ->assertJsonPath('data.0.download_url', null)
            ->assertJsonPath('meta.categories.apply', 'طلبات التأمين');
    }

    public function test_it_downloads_an_attached_file(): void
    {
        Storage::fake('local');
        Storage::disk('local')->put('forms/motor-claim.pdf', '%PDF-1.4 test');

        $form = DownloadableForm::create([
            'category' => FormCategory::Claims,
            'title' => 'نموذج إخطار بحادث سيارة',
            'file_path' => 'forms/motor-claim.pdf',
        ]);

        $this->getJson('/api/forms')
            ->assertJsonPath('data.0.download_url', route('api.forms.download', $form));

        $response = $this->get(route('api.forms.download', $form))
            ->assertOk()
            ->assertDownload();

        // Arabic file name is sent as RFC 5987 "filename*" next to an ASCII fallback.
        $this->assertStringContainsString(
            rawurlencode('نموذج إخطار بحادث سيارة.pdf'),
            $response->headers->get('Content-Disposition'),
        );
    }

    public function test_it_returns_404_when_no_file_is_attached(): void
    {
        $form = DownloadableForm::create([
            'category' => FormCategory::General,
            'title' => 'نموذج شكوى أو اقتراح',
        ]);

        $this->getJson(route('api.forms.download', $form))->assertNotFound();
    }
}
