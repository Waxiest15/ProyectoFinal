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
    protected $primaryKey = "ID_Business";
    use HasFactory;

    protected $fillable = [
        'number',
        'email',
        'password'
    ];

    public function imageBusiness(){
        return $this->hasMany(ImageBusiness::class, 'ID_Business', 'ID_Business');
    }

    public function cellBusiness(){
        return $this->hasMany(CellBusiness::class, 'ID_Business', 'ID_Business');
    }

    public function dataAddressBusiness(){
        return $this->hasManyThrough(
            Address::class,
            AddressBusiness::class,
            'ID_Business',
            'ID_AddressBusiness',
            'ID_Business',
            'ID_AddressBusiness'
        );
    }

    public function addressBusiness(){
        return $this->belongsToMany(
            Address::class,
            'address_businesses',
            'ID_Business',
            'ID_Address'
        );
    }   
}
