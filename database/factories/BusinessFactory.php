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
        $companies = ['Negocio A', 'Negocio B', 'Negocio C', 'Negocio D',
        'Negocio E', 'Negocio F', 'Negocio G', 'Negocio H', 'Negocio I',
        'Negocio J', 'Negocio K', 'Negocio L', 'Negocio M', 'Negocio N',
        'Negocio Ñ', 'Negocio O', 'Negocio P', 'Negocio P', 'Negocio R',
        'Negocio S'];

        return [
            'name' =>  (strval($companies[$this->faker->numberBetween(0,20)]) . strval($this->faker->randomFloat(5, 0, 5400))),
            'description' => $this->faker->realText(),
            'email' => $this->faker->unique()->safeEmail(),
            'distributor' => $this->faker->boolean(),
            'rate' => $this->faker->numberBetween(1,5),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'location_api' => json_encode(['lon' => $this->faker->randomFloat(3, 4513, 22300), 'lat' => $this->faker->randomFloat(3, 4513, 22300)])
        ];
    }
}
