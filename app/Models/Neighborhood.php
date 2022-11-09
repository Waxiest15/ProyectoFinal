<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Neighborhood extends Model
{
    protected $primaryKey = "ID_Neighborhood";
    use HasFactory;

    public function address(){
        return $this->belongsTo(Address::class, 'ID_Neighborhood', 'ID_Address');
    }
}
