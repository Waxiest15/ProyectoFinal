<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Address;

class Neighborhood extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function address(){
        return $this->hasMany(Address::class);
    }
}
