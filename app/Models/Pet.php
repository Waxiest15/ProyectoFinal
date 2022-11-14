<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use League\CommonMark\Util\SpecReader;
use App\Models\ImagePet;
use App\Models\SpeciesBreed;
use App\Models\User;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'age',
        'size',
        'color',
        'description',
        'state'
    ];
    
    public function imagePet(){
        return $this->hasMany(ImagePet::class);
    }

    public function speciesBreed(){
        return $this->belongsTo(SpeciesBreed::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

}
