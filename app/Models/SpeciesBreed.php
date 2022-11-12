<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pet;

class SpeciesBreed extends Model
{
    protected $primaryKey = "ID_SpeciesBreed";
    use HasFactory;

    protected $fillable = [
        'specie',
        'breed'
    ];


    public function pet(){
        return $this->hasOne(Pet::class, 'ID_SpeciesBreed', 'ID_SpeciesBreed');
    }
}
