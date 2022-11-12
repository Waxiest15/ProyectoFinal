<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\ImageProduct;
use App\Models\User;

class Product extends Model
{
    protected $primaryKey = "ID_Product";
    use HasFactory;

    protected $fillable = [
        'name',
        'size',
        'weight',
        'description'
    ];


    public function category(){
        return $this->hasMany(Category::class, 'ID_Product', 'ID_Product');
    }

    public function imageProduct(){
        return $this->hasMany(ImageProduct::class, 'ID_Product', 'ID_Product');
    }

    public function buy(){
        return $this->belongsToMany(
            User::class,
            'buys',
            'ID_Product',
            'ID_User'
        );
    }
}
