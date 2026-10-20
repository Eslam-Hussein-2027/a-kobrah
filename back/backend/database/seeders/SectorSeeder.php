<?php

namespace Database\Seeders;

use App\Models\Sector;
use Illuminate\Database\Seeder;

class SectorSeeder extends Seeder
{
    /**
     * Seed the business sectors shown in the business page marquee.
     */
    public function run(): void
    {
        $sectors = [
            ['icon' => 'zap', 'name' => 'النفط والغاز'],
            ['icon' => 'hardhat', 'name' => 'المقاولات والإنشاءات'],
            ['icon' => 'ship', 'name' => 'التجارة والاستيراد'],
            ['icon' => 'building', 'name' => 'الصناعة'],
            ['icon' => 'truck', 'name' => 'النقل والخدمات اللوجستية'],
            ['icon' => 'wallet', 'name' => 'المصارف والمؤسسات المالية'],
            ['icon' => 'heart', 'name' => 'القطاع الصحي'],
            ['icon' => 'users', 'name' => 'التعليم والخدمات'],
        ];

        foreach ($sectors as $index => $sector) {
            Sector::updateOrCreate(
                ['name' => $sector['name']],
                [...$sector, 'sort_order' => $index + 1, 'is_active' => true],
            );
        }
    }
}
