<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Street extends Model
{
    protected $primaryKey = "ID_Street";
    use HasFactory;

    public function address(){
        return $this->belongsTo(Address::class, 'ID_Street', 'ID_Address');
    }
}
