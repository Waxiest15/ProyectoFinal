<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    public function show_users(){
        //$users =  User::find(1);
        $UsersR=[];
        foreach(User::all() as $user){//Realizamos un forech para cada valor aplicando students a program
            $UsersR[]=[//Dentro de un vector ingresamos name y las name 
                "name"=>$user->name,
                "last_name"=>$user->last_name,
                "last_name2"=>$user->last_name2,
                "birth"=>$user->birth,
                "gender"=>$user->gender,
                "email"=>$user->email,
            ];
        }
        return response()->json($UsersR);//mandamos un response en json 
    }

    public function make_comment(Request $request){//Crea un comentario con base al user_id, product_id y el comment
        $request->validate([
            'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
            'comment' => 'required'
        ]);
        $user = User::find($request->user_id);
        return $user->comment()->attach($request->product_id, 
        ['date' => now(), 'comment' => $request->comment]);
    }
    
    public function buy_products(Request $request){//Al usuario comprar productos 
        $request->validate([
            'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);
        $product = Product::find($request->product_id);
        if($product -> amount==1){//Se resta el producto y si solo quedaba uno se desactiva
            $product -> amount = $product -> amount-1;
            $product -> enable = 0;
            $product -> save();
        }elseif($product->amount>0){
            $product->amount = $product -> amount-1;
            $product -> save();
        }
        return $user->buy()->attach($request->product_id, ['date' => now()]);//Se agrega en la tabla buys
    }

    public function add_shopping_cart_products(Request $request){//Al usuario ingresar productos a su carrito
        $request->validate([
            'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);
        return $user->shopingcart()->attach($request->product_id, ['date' => now()]);//Se agrega en la tabla shopingcart
    }

    public function quit_from_shopping_cart(Request $request){//Al usuario ingresar productos a su carrito
        $request->validate([//CHECAR
            'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);
        $user->shopingcart()->where($request->product_id)->delete();
    }

    public function past_shopping(Request $request){
        $user = User::find($request->user_id);
        $p = [];
        foreach($user->buy as $product){//Iteramos en cada relación de los productos y usuarios
            $p [] = [
                'product' => $product->name,//Generamos el nombre del producto
                'date of buy' => $product->pivot->date//con base a la tabla intermediaria se obtiene la fecha de compra
            ];
        }
        return response()->json($p);
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required|alpha|max:100',
            'last_name' => 'required|alpha|max:100',
            'last_name2' => 'required|alpha|max:100',
            'birth' => 'required|date_format:Y-m-d',
            'gender' => 'required',
            'email' => 'required|email',
            'password' => ['required', Password::min(8)->mixedCase()->numbers()]
        ]);
        $user = new User();
        $user -> name = $request -> name;
        $user -> last_name = $request -> last_name;
        $user -> last_name2 = $request -> last_name2;
        $user -> birth = $request -> birth;
        $user -> gender = $request -> gender;
        $user -> email = $request -> email;
        $user -> password = $request -> password;
        $user -> save();
    }

    

    

    public function showToken(){
        echo csrf_token();
    }
}
