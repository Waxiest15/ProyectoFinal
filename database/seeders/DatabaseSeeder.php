<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use \App\Models\Business;
use \App\Models\Street;
use \App\Models\Category;
use App\Models\CellUser;
use App\Models\CellBusiness;
use \App\Models\User;
use \App\Models\ImageUser;
use \App\Models\ImageBusiness;

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

        //NO borrar xd
        User::factory(10)->state(new Sequence(
            ['gender' => 'masculino'],
            ['gender' => 'femenino'],
            ['gender' => 'no-binario'],
            ['gender' => 'mayionisaaa'],
            ['gender' => 'helicóptero apache no-binario'],
        ))
        ->create()
        ->each(function ($user) {
            CellUser::factory(2)
            ->create(['user_id' => $user->id]);
            ImageUser::factory(2)
            ->create(['user_id' => $user->id]);
        });

        Business::factory(10)
        ->create()
        ->each(function ($business){
            CellBusiness::factory(2)
            ->create(['business_id' => $business->id]);
            ImageBusiness::factory(2)
            ->create(['business_id' => $business->id]);
        });
        
        Street::factory(10)->create();

        $this->call([
            StateSeeder::class,
            CitySeeder::class,
            NeighborhoodSeeder::class,
            CategorySeeder::class,
            SpeciesBreedSeeder::class
        ]);
    }
}
