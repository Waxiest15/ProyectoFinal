<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpeciesBreed extends Model
{
    protected $primaryKey = "ID_SpeciesBreed";
    use HasFactory;

    public function pet(){
        return $this->belongsTo(Pet::class, 'ID_SpeciesBreed', 'ID_Pet');
    }
}
