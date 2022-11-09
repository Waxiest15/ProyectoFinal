<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageUser extends Model
{
    protected $primaryKey = "ID_ImageUser";
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class, 'ID_ImageUser', 'ID_User');
    }
}
