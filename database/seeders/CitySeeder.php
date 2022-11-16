<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\City;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        City::create([
            'name' => 'Aguascalientes'
        ]);
        City::create([
            'name' => 'Asientos'
        ]);
        City::create([
            'name' => 'Calvillo'
        ]);
        City::create([
            'name' => 'Cosío'
        ]);
        City::create([
            'name' => 'Jesús María'
        ]);
        City::create([
            'name' => 'Pabellón de Arteaga'
        ]);
        City::create([
            'name' => 'Rincón de Romos'
        ]);
        City::create([
            'name' => 'San José de Gracia'
        ]);
        City::create([
            'name' => 'Tepezalá'
        ]);
        City::create([
            'name' => 'El Llano'
        ]);
        City::create([
            'name' => 'San Francisco de los Romo'
        ]);
    }
}
