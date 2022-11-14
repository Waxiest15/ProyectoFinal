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
    protected $primaryKey = "ID_Address";

    use HasFactory;

    protected $fillable = [
        'number'
    ];

    public function state(){
        return $this->belongsTo(State::class, 'ID_State', 'ID_Address');
    }

    public function city(){
        return $this->belongsTo(City::class, 'ID_City', 'ID_Address');
    }

    public function neighborhood(){
        return $this->belongsTo(Neighborhood::class, 'ID_Neighborhood','ID_Address');
    }

    public function street(){
        return $this->belongsTo(Street::class, 'ID_Street', 'ID_Address');
    }

    public function addressUser(){
        return $this->belongsToMany(
            User::class,
            'address_users',
            'ID_Address',
            'ID_User'
        );
    }

    public function addressBusiness(){
        return $this->belongsToMany(
            Business::class,
            'address_businesses',
            'ID_Address',
            'ID_Business'
        );
    }


    
}
