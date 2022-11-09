<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    protected $primaryKey = "ID_User";
    use HasApiTokens, HasFactory, Notifiable;

    public function cellUser(){
        return $this->hasMany(CellUser::class, 'ID_User', 'ID_CellUser');
    }

    public function imageUser(){
        return $this->hasMany(ImageUser::class, 'ID_User', 'ID_ImageUser');
    }

    public function addressUser(){
        return $this->hasManyThrough(
            Address::class, 
            AddressUser::class,
            'ID_User',
            'ID_AddressUser',
            'ID_User',
            'ID_AddressUser'
        );
    }

    public function addressBusiness(){
        return $this->hasManyThrough(
            Address::class,
            AddressBusiness::class,
            'ID_User',
            'ID_AddressBusiness',
            'ID_User',
            'ID_AddressBusiness'
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
