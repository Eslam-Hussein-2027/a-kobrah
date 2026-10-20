<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SectorResource;
use App\Models\Sector;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class SectorController extends Controller
{
    /**
     * Business sectors served (shown on the business insurance page).
     */
    public function index(): AnonymousResourceCollection
    {
        return SectorResource::collection(Sector::published()->get());
    }
}
