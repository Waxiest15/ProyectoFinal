<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Business;

class ImageBusiness extends Model
{
    use HasFactory;

    protected $fillable = [
        'route'
    ];

    public function businesses(){
        return $this->belongsTo(Business::class);
    }
}
