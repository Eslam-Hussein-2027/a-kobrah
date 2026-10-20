<?php

namespace Tests\Feature\Api;

use App\Mail\ContactMessageReceived;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactMessageApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @return array<string, string>
     */
    private function validPayload(): array
    {
        return [
            'name' => 'أحمد علي',
            'phone' => '+218 91 234 5678',
            'email' => 'ahmed@example.com',
            'insurance_type' => 'تأمين السيارات',
            'message' => 'أرغب في الحصول على عرض سعر للتأمين الشامل.',
        ];
    }

    public function test_it_stores_a_valid_message(): void
    {
        Mail::fake();

        $this->postJson('/api/contact', $this->validPayload())
            ->assertCreated()
            ->assertJsonStructure(['message', 'data' => ['id']]);

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'أحمد علي',
            'insurance_type' => 'تأمين السيارات',
        ]);

        Mail::assertNothingSent();
    }

    public function test_it_emails_the_company_inbox_when_configured(): void
    {
        Mail::fake();
        config(['site.contact_recipient' => 'inbox@a-kobrah.ly']);

        $this->postJson('/api/contact', $this->validPayload())->assertCreated();

        Mail::assertSent(ContactMessageReceived::class, fn ($mail) => $mail->hasTo('inbox@a-kobrah.ly')
            && $mail->hasReplyTo('ahmed@example.com'));
    }

    public function test_it_validates_the_message_with_arabic_errors(): void
    {
        $this->postJson('/api/contact', [
            'name' => 'أح',
            'phone' => 'abc',
            'email' => 'not-an-email',
            'message' => 'قصير',
        ])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['name', 'phone', 'email', 'insurance_type', 'message'])
            ->assertJsonPath('errors.phone.0', 'يرجى إدخال رقم هاتف صحيح');

        $this->assertDatabaseCount('contact_messages', 0);
    }

    public function test_email_is_optional(): void
    {
        $this->postJson('/api/contact', [...$this->validPayload(), 'email' => ''])->assertCreated();
    }

    public function test_it_is_rate_limited(): void
    {
        foreach (range(1, 5) as $ignored) {
            $this->postJson('/api/contact', $this->validPayload())->assertCreated();
        }

        $this->postJson('/api/contact', $this->validPayload())->assertTooManyRequests();
    }
}
