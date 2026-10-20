<?php

namespace App\Http\Controllers\Api;

use App\Enums\ProductType;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Validation\Rule;

class ProductController extends Controller
{
    /**
     * List insurance products, optionally filtered by ?type=personal|business.
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        $validated = $request->validate([
            'type' => ['nullable', Rule::enum(ProductType::class)],
        ]);

        $products = Product::published()
            ->when($validated['type'] ?? null, fn ($query, $type) => $query->where('type', $type))
            ->get();

        return ProductResource::collection($products);
    }
}
