<?php

namespace Database\Factories;

use App\Models\Business;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
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
            'name' => $this->faker->asciify('Producto-*****'),
            'size' => ('{length:' . strval($this->faker->randomFloat(2, 0, 500)) . 
                ', width:' . strval($this->faker->randomFloat(2, 0, 500)) .
                ', tall:' . strval($this->faker->randomFloat(2, 0, 500)) . '}'),//en cm
            'weight' => $this->faker->randomFloat(2, 1, 50),
            'price' => $this->faker->randomFloat(2, 50, 5000),
            'description' => $this->faker->paragraph(),
            'rate' => $this->faker->randomFloat(1, 0, 5),
            'amount' => $this->faker->numberBetween(1, 100),
            'enable' => $this->faker->boolean(),
            'deliverTime' => $this->faker->numberBetween(1, 32),
            'brand' => (strval($companies[$this->faker->numberBetween(0,19)]) . strval($this->faker->randomFloat(5, 0, 5400))),
            'category_id' => Category::inRandomOrder()->first()->id,
        ];
    }
}
