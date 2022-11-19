<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Neighborhood;
use App\Models\State;
use App\Models\Street;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'number' => $this->faker->numberBetween(1,1000),
            'state_id' => State::inRandomOrder()->first()->id,
            'city_id' => City::inRandomOrder()->first()->id,
            'neighborhood_id' => Neighborhood::inRandomOrder()->first()->id,
            'street_id' => Street::inRandomOrder()->first()->id
        ];
    }
}
