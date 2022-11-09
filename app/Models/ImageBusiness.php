<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageBusiness extends Model
{
    protected $primaryKey = "ID_ImageBusiness";
    use HasFactory;

    public function businesses(){
        return $this->belongsTo(Business::class, 'ID_ImageBusiness', 'ID_Business');
    }
}
