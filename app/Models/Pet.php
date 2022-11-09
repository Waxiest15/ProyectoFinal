<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use League\CommonMark\Util\SpecReader;

class Pet extends Model
{
    protected $primaryKey = "ID_Pet";
    use HasFactory;
    
    public function imagePet(){
        return $this->hasMany(ImagePet::class, 'ID_Pet', 'ID_ImagePet');
    }

    public function speciesBreed(){
        return $this->hasOne(SpeciesBreed::class, 'ID_Pet', 'ID_SpeciesBreed');
    }
}
