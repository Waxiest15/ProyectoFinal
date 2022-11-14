<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\CellUser;
use App\Models\ImageUser;
use App\Models\Address;
use App\Models\AddressUser;
use App\Models\Product;
use App\Models\Pet;

class User extends Authenticatable
{
    protected $primaryKey = "ID_User";
    use HasApiTokens, HasFactory, Notifiable;

    public function cellUser(){
        return $this->hasMany(CellUser::class, 'ID_User', 'ID_User');
    }

    public function imageUser(){
        return $this->hasMany(ImageUser::class, 'ID_User', 'ID_User');
    }

    public function pet(){
        return $this->hasMany(Pet::class, 'ID_User', 'ID_User');
    }

    public function dataAddressUser(){
        return $this->hasManyThrough(
            Address::class, 
            AddressUser::class,
            'ID_User',
            'ID_AddressUser',
            'ID_User',
            'ID_AddressUser'
        );
    }

    public function addressUser(){
        return $this->belongsToMany(
            Address::class,
            'address_users',
            'ID_AddressUser',
            'ID_User',
            'ID_Address'
        );
    }

    public function buy(){
        return $this->belongsToMany(
            Product::class,
            'buys',
            'ID_User',
            'ID_Product'
        );
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
