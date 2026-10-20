<?php

namespace Tests\Feature\Api;

use App\Models\Product;
use Database\Seeders\ProductSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(ProductSeeder::class);
    }

    public function test_it_lists_all_active_products_in_order(): void
    {
        Product::where('slug', 'money')->update(['is_active' => false]);

        $this->getJson('/api/products')
            ->assertOk()
            ->assertJsonCount(13, 'data')
            ->assertJsonPath('data.0.slug', 'motor')
            ->assertJsonPath('data.0.benefits.0', 'التأمين الإجباري (المسؤولية تجاه الغير)')
            ->assertJsonStructure(['data' => [['id', 'type', 'slug', 'icon', 'title', 'description', 'benefits']]]);
    }

    public function test_it_filters_products_by_type(): void
    {
        $this->getJson('/api/products?type=business')
            ->assertOk()
            ->assertJsonCount(8, 'data')
            ->assertJsonPath('data.0.type', 'business');
    }

    public function test_it_rejects_an_unknown_type(): void
    {
        $this->getJson('/api/products?type=unknown')
            ->assertUnprocessable()
            ->assertJsonValidationErrors('type');
    }
}
