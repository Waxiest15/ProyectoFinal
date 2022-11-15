<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\User::factory(10)->state(new Sequence(
            ['gender' => 'masculino'],
            ['gender' => 'femenino'],
            ['gender' => 'no-binario'],
            ['gender' => 'mayionisaaa'],
            ['gender' => 'helicóptero apache no-binario'],
        ))
        ->create();
    }
}
