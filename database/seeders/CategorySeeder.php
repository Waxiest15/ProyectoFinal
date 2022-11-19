<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name' => 'Comida Para Perros',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Comida Para Gatos',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Comida Para Pájaros',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Comida Para Anfibios Y Reptiles',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Collares',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Peceras',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Juguetes',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Aseo',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Mantenimiento',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Ropa Para Perros',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Ropa Para Gatos',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Accesorios Para Perro',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Accesorios Para Gato',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Accesorios Para Pájaros',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Accesorios Para Anfibios Y Reptiles',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Jaulas',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Camas Para Perros',
            'physical' => True
        ]);
        Category::create([
            'name' => 'Camas Para Gato',
            'physical' => True
        ]);



        ////
        Category::create([
            'name' => 'Baño',
            'physical' => False
        ]);
        Category::create([
            'name' => 'Estancia',
            'physical' => False
        ]);
        Category::create([
            'name' => 'Paseo',
            'physical' => False
        ]);
        Category::create([
            'name' => 'Veterinaria',
            'physical' => False
        ]);
        
    }
}
