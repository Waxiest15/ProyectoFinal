<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
// use Laravel\Sanctum\HasApiTokens;
use App\Models\CellUser;
use App\Models\ImageUser;
use App\Models\Address;
use App\Models\AddressUser;
use App\Models\Product;
use App\Models\Pet;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
//use Laravel\Sanctum\HasApiTokens;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function cellUser(){
        return $this->hasMany(CellUser::class);
    }

    public function imageUser(){
        return $this->hasMany(ImageUser::class);
    }

    public function pet(){
        return $this->hasMany(Pet::class);
    }

    public function dataAddressUser(){
        return $this->hasManyThrough(
            Address::class, 
            AddressUser::class
        );
    }

    public function addressUser(){
        return $this->belongsToMany(
            Address::class,
            'address_users'
        )->withTimestamps();
    }

    public function buy(){
        return $this->belongsToMany(
            Product::class,
            'buys'
        )
        ->withPivot(['date'])
        ->withTimestamps();
    }

    public function wishlist(){
        return $this->belongsToMany(
            Product::class,
            'wishlists'
        )
        ->withPivot(['date'])
        ->withTimestamps();
    }

    public function shopingcart(){
        return $this->belongsToMany(
            Product::class,
            'shopping_carts'
        )->withPivot(['date'])
        ->withTimestamps();
    }

    public function comment(){
        return $this->belongsToMany(
            Product::class,
            'comments'
        )->withPivot('date','comment','id')
        ->withTimestamps();
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'last_name',
        'last_name2',
        'birth',
        'gender',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
