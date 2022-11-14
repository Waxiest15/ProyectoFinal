<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Address;

class Street extends Model
{
    use HasFactory;

    public function address(){
        return $this->hasMany(Address::class);
    }
}
