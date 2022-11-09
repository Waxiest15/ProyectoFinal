<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $primaryKey = "ID_Address";
    use HasFactory;

    public function state(){
        return $this->hasMany(State::class, 'ID_Address', 'ID_State');
    }

    public function city(){
        return $this->hasMany(City::class, 'ID_Address', 'ID_City');
    }

    public function neighborhood(){
        return $this->hasMany(Neighborhood::class, 'ID_Address','ID_Neighborhood');
    }

    public function street(){
        return $this->hasMany(Street::class, 'ID_Address', 'ID_Street');
    }

    
}
