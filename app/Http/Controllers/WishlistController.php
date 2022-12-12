<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function delete_product($id){
        $s = Wishlist::find($id);
        $s -> delete();
        return response('deleted');
    }

    public function clear_cart($id){
        Wishlist::where('user_id',$id)->delete();
        return response('deleted');
    }
}
