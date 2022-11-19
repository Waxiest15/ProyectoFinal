<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SpeciesBreed;

use function Ramsey\Uuid\v1;

class SpeciesBreedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Perros
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Akita'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Alaskan malamute'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'American pit bull terrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Australian Terrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Beagle'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Bichón Habanero'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Billy'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Border terrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Boxer'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Bull terrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Bulldog americano'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Bulldog inglés'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Chihuahua'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Chin'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Collie Barbudo'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Dálmata'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Dobermann'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Dogo del Tibet'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'English Foxhound'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Eurasier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Foxhound Inglés'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Golden Retriever'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Gordon Setter'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Gran Perro Japonés'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Harrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Hovawart'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Irish terrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Jack Russell terrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Kai'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Kishu'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Komondor'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Laika Ruso Europeo'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Malamute de Alaska'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Manchester terrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Mudi'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Otterhound'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Rottweiler'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Sabueso de Hamilton'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Sabueso Español'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Shih Tzu'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Terrier galés'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Viejo Pastor Inglés'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Weimaraner'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Welsh terrier'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Whippet'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Xoloitzcuintle'
        ]);
        SpeciesBreed::create([
            'specie' => 'Perro',
            'breed' => 'Yorkshire Terrier'
        ]);


        //Gatos
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Persa'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Azul ruso'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Siamés'
        ]);

        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Siberiano'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Maine Coon'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Británico De Pelo Corto'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Himalayo'
        ]);

        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'De Bengala'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Manx'
        ]);

        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Nebelung'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Ragdoll'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Neva Masquerade'
        ]);

        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Van Turco'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Angora Turco'
        ]);

        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Habana'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Común Europeo'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Ragamuffin'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Británico De Pelo Largo'
        ]);

        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Caracat'
        ]);
        SpeciesBreed::create([
            'specie' => 'Gato',
            'breed' => 'Singapur'
        ]);


        /////
        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Canarios'
        ]);
        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Jilgueros'
        ]);

        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Pájaros del Amor'
        ]);

        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Ninfa'
        ]);
        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Diamantes'
        ]);
        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Agapornis'
        ]);

        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Cotorras'
        ]);
        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Cacatúas'
        ]);
        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Guacamayo'
        ]);
        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Eclectus'
        ]);
        SpeciesBreed::create([
            'specie' => 'Pájaros',
            'breed' => 'Loro'
        ]);


        ////////////////////
        SpeciesBreed::create([
            'specie' => 'Anfibios',
            'breed' => 'Rana arborícola'
        ]);
        SpeciesBreed::create([
            'specie' => 'Anfibios',
            'breed' => 'Sapo De Vientre Amarillo'
        ]);
        SpeciesBreed::create([
            'specie' => 'Anfibios',
            'breed' => 'Sapillo Se Vientre Coloreado'
        ]);
        SpeciesBreed::create([
            'specie' => 'Anfibios',
            'breed' => 'Tritón Vientre De Fuego Chino'
        ]);
        SpeciesBreed::create([
            'specie' => 'Anfibios',
            'breed' => 'Eana Africana De Uñas'
        ]);
        SpeciesBreed::create([
            'specie' => 'Anfibios',
            'breed' => 'Rana Toro'
        ]);
        SpeciesBreed::create([
            'specie' => 'Anfibios',
            'breed' => 'Ajolote'
        ]);


        ///////
        SpeciesBreed::create([
            'specie' => 'Reptiles',
            'breed' => 'Tortuga'
        ]);
        SpeciesBreed::create([
            'specie' => 'Reptiles',
            'breed' => 'Gecko'
        ]);
        SpeciesBreed::create([
            'specie' => 'Reptiles',
            'breed' => 'Camaleón'
        ]);
        SpeciesBreed::create([
            'specie' => 'Reptiles',
            'breed' => 'Iguana'
        ]);
        SpeciesBreed::create([
            'specie' => 'Reptiles',
            'breed' => 'Serpiente'
        ]);
    }
}
