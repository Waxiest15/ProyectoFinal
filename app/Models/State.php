<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $primaryKey = "ID_State";
    use HasFactory;

    public function address(){
        return $this->belongsTo(Address::class, 'ID_State', 'ID_Address');
    }
}
