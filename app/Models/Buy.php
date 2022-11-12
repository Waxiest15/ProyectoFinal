<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buy extends Model
{
    protected $primaryKey = "ID_Buy";
    use HasFactory;
    
    protected $fillable = [
        'date'
    ];
}
