<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\State;
class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        State::create([
            'name' => 'Aguascalientes'
        ]);
        State::create([
            'name' => 'Baja California'
        ]);
        State::create([
            'name' => 'Baja California Sur'
        ]);
        State::create([
            'name' => 'Campeche'
        ]);
        State::create([
            'name' => 'Chiapas'
        ]);
        State::create([
            'name' => 'Colima'
        ]);
        State::create([
            'name' => 'Coahuila'
        ]);
        State::create([
            'name' => 'Ciudad de México'
        ]);
        State::create([
            'name' => 'Durango'
        ]);
        State::create([
            'name' => 'Estado de México'
        ]);
        State::create([
            'name' => 'Guanajuato'
        ]);
        State::create([
            'name' => 'Guerrero'
        ]);
        State::create([
            'name' => 'Hidalgo'
        ]);
        State::create([
            'name' => 'Jalisco'
        ]);
        State::create([
            'name' => 'Michoacán'
        ]);
        State::create([
            'name' => 'Nuevo León'
        ]);
        State::create([
            'name' => 'Oaxaca'
        ]);
        State::create([
            'name' => 'Puebla'
        ]);
        State::create([
            'name' => 'Querétaro'
        ]);
        State::create([
            'name' => 'Quintana Roo'
        ]);
        State::create([
            'name' => 'San Luis Potosí'
        ]);
        State::create([
            'name' => 'Sinaloa'
        ]);
        State::create([
            'name' => 'Sonora'
        ]);
        State::create([
            'name' => 'Tabasco'
        ]);
        State::create([
            'name' => 'Tamaulipas'
        ]);
        State::create([
            'name' => 'Tlaxcala'
        ]);
        State::create([
            'name' => 'Veracruz'
        ]);
        State::create([
            'name' => 'Yucatán'
        ]);
        State::create([
            'name' => 'Zacatecas'
        ]);      

    }
}
