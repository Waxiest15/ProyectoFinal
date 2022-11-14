<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pet;

class ImagePet extends Model
{
    protected $primaryKey = "ID_ImagePet";
    use HasFactory;

    protected $fillable = [
        'route'
    ];

    public function pet(){
        return $this->belongsTo(Pet::class, 'ID_Pet', 'ID_ImagePet');
    }
}
