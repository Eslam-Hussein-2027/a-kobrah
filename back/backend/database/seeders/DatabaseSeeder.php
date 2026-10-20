<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the website content.
     */
    public function run(): void
    {
        $this->call([
            ProductSeeder::class,
            SectorSeeder::class,
            DownloadableFormSeeder::class,
        ]);
    }
}
