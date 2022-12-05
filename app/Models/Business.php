<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\imageBusiness;
use App\Models\Address;
use App\Models\AddressBusiness;
use App\Models\CellBusiness;
use App\Models\Product;
use App\Models\Category;

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

    public function products(){
        return $this->hasMany(Product::class);
    }
    public function dataAddressBusiness(){//Checar
        return $this->hasManyThrough(
            Address::class,
            AddressBusiness::class
        );
    }

    public function dataCategory(){//CHECAR
        return $this->belongsToMany(
            Category::class,
            'products'            
        )->withPivot(['id','name','size','weight','price','rate','description',
        'amount','image','deliverTime','category_id','business_id']);
    }

    public function addressBusiness(){//Checar
        return $this->belongsToMany(
            Address::class,
            'address_businesses'
        )->withTimestamps();
    }   
}
