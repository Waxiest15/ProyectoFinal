<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Provider\es_MX\Address;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Business>
 */
class BusinessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        return [
            'name' =>  $this->faker->company(),
            'description' => $this->faker->realText(),
            'email' => $this->faker->unique()->safeEmail(),
            'distributor' => $this->faker->boolean(),
            'rate' => $this->faker->numberBetween(1,5),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'location_api' => json_encode(['lon' => $this->faker->numberBetween(12213,2343), 'lat' => $this->faker->numberBetween(131,23323)])
        ];
    }
}
