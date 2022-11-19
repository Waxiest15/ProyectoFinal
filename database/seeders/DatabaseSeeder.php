<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Address;
use App\Models\AddressBusiness;
use App\Models\AddressUser;
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
use \App\Models\Buy;
use App\Models\Comment;
use App\Models\ImagePet;
use App\Models\ImageProduct;
use App\Models\Pet;
use App\Models\Product;
use App\Models\ShoppingCart;
use App\Models\Wishlist;

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
            ['gender' => 'Masculino'],
            ['gender' => 'Femenino'],
            ['gender' => 'No-Binario'],
            ['gender' => 'Prefiero no decirlo'],
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

        Address::factory(10)->create();
        Product::factory(10)->create()
        ->each(function ($product){
            ImageProduct::factory(2)
            ->create(['product_id' => $product->id]);
        });

        Pet::factory(10)->create()
        ->each(function ($pet){
            ImagePet::factory(10)
            ->create(['pet_id' => $pet->id]);
        });

        AddressUser::factory(10)->create();
        AddressBusiness::factory(10)->create();
        Buy::factory(10)->create();
        Wishlist::factory(10)->create();
        ShoppingCart::factory(10)->create();
        Comment::factory(10)->create();




    }
}
