<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Category extends Model
{
    protected $primaryKey = "ID_Category";
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function products(){
        return $this->hasMany(Product::class, 'ID_Category', 'ID_Category');
    }
}
