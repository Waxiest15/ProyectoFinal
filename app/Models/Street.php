<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Address;

class Street extends Model
{
    protected $primaryKey = "ID_Street";
    use HasFactory;

    public function address(){
        return $this->hasMany(Address::class, 'ID_Street', 'ID_Street');
    }
}
