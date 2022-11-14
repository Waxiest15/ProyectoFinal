<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Business;

class CellBusiness extends Model
{
    use HasFactory;  
     
    protected $fillable = [
        'phone'
    ];

    public function business(){
        return $this->belongsTo(Business::class);
    }
}
