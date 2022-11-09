<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagePet extends Model
{
    protected $primaryKey = "ID_ImagePet";
    use HasFactory;

    public function pet(){
        return $this->belongsTo(Pet::class, 'ID_ImagePet', 'ID_Pet');
    }
}
