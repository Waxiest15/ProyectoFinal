<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class ImageUser extends Model
{
    protected $primaryKey = "ID_ImageUser";
    use HasFactory;

    protected $fillable = [
        'route'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'ID_User', 'ID_ImageUser');
    }
}
