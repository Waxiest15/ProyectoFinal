<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\ImageProduct;
use App\Models\User;
use PhpParser\Node\Expr\FuncCall;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'size',
        'weight',
        'description'
    ];


    public function category(){
        return $this->hasMany(Category::class);
    }

    public function imageProduct(){
        return $this->hasMany(ImageProduct::class);
    }

    public function buy(){
        return $this->belongsToMany(
            User::class,
            'buys'
        )
        ->withPivot('date')
        ->as('buys')
        ->withTimestamps();
    }

    public function wishlist(){
        return $this->belongsToMany(
            User::class,
            'wishlists'
        )->withPivot('date')
        ->withTimestamps();
    }

    public function shopingcart(){
        return $this->belongsToMany(
            User::class,
            'shopping_carts'
        )->withPivot('date')
        ->withTimestamps();
    }

    public function comment(){
        return $this->belongsToMany(
            User::class,
            'comments'
        )->withPivot('date','comment')
        ->withTimestamps();
    }
}
