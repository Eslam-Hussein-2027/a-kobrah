<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class SiteController extends Controller
{
    /**
     * Public company details (contact info, social links, counters).
     */
    public function __invoke(): JsonResponse
    {
        $site = config('site');

        return response()->json([
            'data' => [
                'name' => $site['name'],
                'name_en' => $site['name_en'],
                'phone' => $site['phone'],
                'email' => $site['email'],
                'address' => $site['address'],
                'hours' => $site['hours'],
                'map_query' => $site['map_query'],
                'social' => $site['social'],
                'stats' => $site['stats'],
            ],
        ]);
    }
}
