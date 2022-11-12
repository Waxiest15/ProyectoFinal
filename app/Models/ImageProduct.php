<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class ImageProduct extends Model
{
    protected $primaryKey = "ID_ImageProduct";
    use HasFactory;

    protected $fillable = [
        'route'
    ];

    public function product(){
        return $this->belongsTo(Product::class, 'ID_Product','ID_ImageProduct');
    }
}
