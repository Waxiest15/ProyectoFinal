<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $primaryKey = "ID_Product";
    use HasFactory;

    public function category(){
        return $this->belongsTo(Category::class, 'ID_Product', 'ID_Category');
    }

    public function imageProduct(){
        return $this->hasMany(ImageProduct::class, 'ID_Product', 'ID_ImageProduct');
    }
}
