<?php

namespace App\Http\Controllers;

use App\Models\ShoppingCart;
use Illuminate\Http\Request;

class ShoppingCartController extends Controller
{
    public function inCart($user_id, $product_id){
        $r = 0;
        if(ShoppingCart::where('user_id',$user_id)->where('product_id',$product_id)->count()>1){
            $r = 1;
        }
        return response($r);
    }

    
    public function delete_product($id){
        $s = ShoppingCart::find($id);
        $s -> delete();
        return response('deleted');
    }

    public function clear_cart($id){
        ShoppingCart::where('user_id',$id)->delete();
        return response('deleted');
    }
}
