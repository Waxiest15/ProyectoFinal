<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\State;
use App\Models\City;
use App\Models\Neighborhood;
use App\Models\Street;
use App\Models\User;
use App\Models\Business;

class Address extends Model
{//Ta' bien :D
    use HasFactory;

    protected $fillable = [
        'number'
    ];

    public function state(){
        return $this->belongsTo(State::class);
    }

    public function city(){
        return $this->belongsTo(City::class);
    }

    public function neighborhood(){
        return $this->belongsTo(Neighborhood::class);
    }

    public function street(){
        return $this->belongsTo(Street::class);
    }

    public function addressUser(){
        return $this->belongsToMany(
            User::class,
            'address_users'
        )->withTimestamps();
    }

    public function addressBusiness(){
        return $this->belongsToMany(
            Business::class,
            'address_businesses'
        )->withTimestamps();
    }


    
}
