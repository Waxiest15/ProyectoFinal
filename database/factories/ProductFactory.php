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
        return [
            'name' => $this->faker->asciify('Producto-*****'),
            'size' => json_encode('{length:' . strval($this->faker->randomFloat(2, 0, 500)) . 
                ', width:' . strval($this->faker->randomFloat(2, 0, 500)) .
                ', tall:' . strval($this->faker->randomFloat(2, 0, 500)) . '}'),//en cm
            'weight' => $this->faker->randomFloat(2, 1, 50),
            'price' => $this->faker->randomFloat(2, 50, 5000),
            'description' => $this->faker->paragraph(),
            'rate' => $this->faker->randomFloat(1, 0, 5),
            'amount' => $this->faker->numberBetween(1, 100),
            'enable' => $this->faker->boolean(),
            'deliverTime' => $this->faker->numberBetween(1, 32),
            'category_id' => Category::inRandomOrder()->first()->id,
            'business_id' => Business::inRandomOrder()->first()->id
        ];
    }
}
