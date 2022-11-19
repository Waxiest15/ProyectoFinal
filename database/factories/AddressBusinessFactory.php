<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\Business;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AddressBusiness>
 */
class AddressBusinessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'business_id' => Business::inRandomOrder()->first()->id,
            'address_id' => Address::inRandomOrder()->first()->id
        ];
    }
}
