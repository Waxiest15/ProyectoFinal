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
    protected $primaryKey = "ID_Pet";
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
        return $this->hasMany(ImagePet::class, 'ID_Pet', 'ID_Pet');
    }

    public function speciesBreed(){
        return $this->belongsTo(SpeciesBreed::class, 'ID_SpeciesBreed', 'ID_Pet');
    }

    public function user(){
        return $this->belongsTo(User::class,'ID_User', 'ID_Pet');
    }

}
