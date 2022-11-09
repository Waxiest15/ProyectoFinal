<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageProduct extends Model
{
    protected $primaryKey = "ID_ImageProduct";
    use HasFactory;

    public function product(){
        return $this->belongsTo(Product::class, 'ID_ImageProduct','ID_Product');
    }
}
