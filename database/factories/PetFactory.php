<?php

namespace Database\Factories;

use App\Models\SpeciesBreed;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pet>
 */
class PetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName(),
            'age' => $this->faker->numberBetween(0,13),
            'size' => strval($this->faker->randomFloat(1, 10, 200)),
            'color' => $this->faker->hexColor(),
            'description' => $this->faker->paragraph(),
            'state' => $this->faker->boolean(),
            'user_id' => User::inRandomOrder()->first()->id,
            'species_breed_id' => SpeciesBreed::inRandomOrder()->first()->id
        ];
    }
}
