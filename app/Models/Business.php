<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\imageBusiness;
use App\Models\Address;
use App\Models\AddressBusiness;
use App\Models\CellBusiness;

class Business extends Model
{//Ta' bien :D
    use HasFactory;

    protected $fillable = [
        'number',
        'email',
        'password',
        'description',
        'distributor',
        'rate',
        'location_api'
    ];

    public function imageBusiness(){
        return $this->hasMany(ImageBusiness::class);
    }

    public function cellBusiness(){
        return $this->hasMany(CellBusiness::class);
    }

    public function dataAddressBusiness(){//Checar
        return $this->hasManyThrough(
            Address::class,
            AddressBusiness::class
        );
    }

    public function addressBusiness(){//Checar
        return $this->belongsToMany(
            Address::class,
            'address_businesses'
        )->withTimestamps();
    }   
}
