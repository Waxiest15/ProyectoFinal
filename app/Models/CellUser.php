<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CellUser extends Model
{
    protected $primaryKey = "ID_CellUser";
    use HasFactory;
    
    protected $fillable = [
        'phone'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'ID_User', 'ID_CellUser');
    }
}
