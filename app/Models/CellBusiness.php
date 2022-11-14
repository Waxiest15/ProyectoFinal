<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Business;

class CellBusiness extends Model
{
    protected $primaryKey = "ID_CellBusiness";
    use HasFactory;  
     
    protected $fillable = [
        'phone'
    ];

    public function business(){
        return $this->belongsTo(Business::class, 'ID_Business', 'ID_CellBusiness' );
    }
}
