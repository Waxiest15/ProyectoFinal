<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Address;

class City extends Model
{
    protected $primaryKey = "ID_City";
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function address(){
        return $this->hasMany(Address::class, 'ID_City', 'ID_City');
    }
}
