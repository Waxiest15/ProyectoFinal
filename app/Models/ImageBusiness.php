<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Business;

class ImageBusiness extends Model
{
    protected $primaryKey = "ID_ImageBusiness";
    use HasFactory;

    protected $fillable = [
        'route'
    ];

    public function businesses(){
        return $this->belongsTo(Business::class, 'ID_Business', 'ID_ImageBusiness');
    }
}
