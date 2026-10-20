<?php

namespace Tests\Feature\Api;

use Database\Seeders\SectorSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SectorApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_lists_sectors(): void
    {
        $this->seed(SectorSeeder::class);

        $this->getJson('/api/sectors')
            ->assertOk()
            ->assertJsonCount(8, 'data')
            ->assertJsonPath('data.0.name', 'النفط والغاز')
            ->assertJsonStructure(['data' => [['id', 'icon', 'name']]]);
    }
}
