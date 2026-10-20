<?php

namespace Tests\Feature\Api;

use Tests\TestCase;

class SiteApiTest extends TestCase
{
    public function test_it_returns_the_public_site_settings(): void
    {
        config(['site.phone' => '+218 21 000 0000']);

        $this->getJson('/api/site')
            ->assertOk()
            ->assertJsonPath('data.phone', '+218 21 000 0000')
            ->assertJsonStructure(['data' => [
                'name', 'name_en', 'phone', 'email', 'address', 'hours', 'map_query',
                'social' => ['facebook', 'instagram', 'linkedin'],
                'stats' => [['value', 'prefix', 'label']],
            ]])
            ->assertJsonMissingPath('data.contact_recipient');
    }
}
