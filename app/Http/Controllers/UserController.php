<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Laravel\Ui\Presets\React;
use PhpParser\Node\Expr\FuncCall;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\AddressController\last_address;
use App\Models\Category;
use App\Models\City;
use App\Models\Neighborhood;
use App\Models\State;
use App\Models\Street;
use App\Models\SpeciesBreed;

class UserController extends Controller
{

    public function add_image(Request $request){
        $fie = $request->file('image');
        $filename = date('His') . 'user'.$request->user_id;

        $user = User::find($request->user_id);
        $user ->image = $request->file('image')->move('imagesU/', $filename, 'public');
        $user -> save();
        return response('jalo?');
    }

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

    public function show_user($id){
        return response()->json(User::find($id));//mandamos un response en json 
    }

    public function make_comment(Request $request){//Crea un comentario con base al user_id, product_id y el comment
        $request->validate([
            'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
            'comment' => 'required'
        ]);
        $user = User::find($request->user_id);//PROBAR
        return $user->comment()->attach($request->product_id, 
        ['date' => now(), 'comment' => $request->comment]);
    }

    public function delete_comment(Request $request){
        $request->validate([
            'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
            'comment' => 'required'
        ]);
        $user = User::find($request->user_id);//PROBAR
        return $user->comment()->detach($request->product_id);//BORAR TODOS LOS COMENTARIOS HECHOS XD
    }
    
    public function buy_products(Request $request){//Al usuario comprar productos 
        $request->validate([
            'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);//PROBAR
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
        $user = User::find($request->user_id);//PROBAR
        return $user->shopingcart()->attach($request->product_id, ['date' => now()]);//Se agrega en la tabla shopingcart
    }

    public function show_wishlist($user_id){
        $user = User::find($user_id);//PROBAR
        $p = [];
        foreach($user->wishlist as $product){
            $p [] = [
                'id' => $product->pivot->id,
                'product_id' => $product->id,
                'product_price' => $product->price,
                'product_des' => $product->description,
                'rate' => $product->rate,
                'product' => $product->name,//Generamos el nombre del producto
                'date_add' => $product->pivot->date,//con base a la tabla intermediaria se obtiene la fecha de compra
                'image' => $product->image,
                'category' => Category::find($product->category_id)->name
            ];
        }
        return response()->json($p);
    }

    public function show_shopping_cart($user_id){
        $user = User::find($user_id);//PROBAR
        $p = [];
        foreach($user->shopingcart as $product){
            $p [] = [
                'id' => $product->pivot->id,
                'product_id' => $product->id,
                'product_price' => $product->price,
                'product_des' => $product->description,
                'rate' => $product->rate,
                'product' => $product->name,//Generamos el nombre del producto
                'date_add' => $product->pivot->date,//con base a la tabla intermediaria se obtiene la fecha de compra
                'image' => $product->image,
                'category' => Category::find($product->category_id)->name
            ];
        }
        return response()->json($p);
    }

    public function past_shopping($user_id){
        $user = User::find($user_id);//PROBAR
        $p = [];
        foreach($user->buy as $product){//Iteramos en cada relación de los productos y usuarios
            $p [] = [
                'product_id' => $product->id,
                'product' => $product->name,//Generamos el nombre del producto
                'price' => $product->price,
                'description' => $product->description,
                'date_of_buy' => $product->pivot->date,//con base a la tabla intermediaria se obtiene la fecha de compra
                'image' => $product->image,
                'rate' => $product->rate,
                'category' => Category::find($product->category_id)->name,
            ];
        }
        return response()->json($p);
    }

    public function add_wishlist_products(Request $request){//Al usuario ingresar productos a su wishlist
        $request->validate([
            'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);//PROBAR
        return $user->wishlist()->attach($request->product_id, ['date' => now()]);//Se agrega en la tabla wishlists
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
        if($request->image){
            $user -> image = $this->store_image($request);
        }
        $user -> save();
    }

   

    public function show_state(Request $request){
        $request->validate([
                    'user_id' => 'required|numeric|min:1'
                ]);        
        $user = User::find($request->user_id);
        $state = [];
        foreach($user->state as $st){
            $state [] = [
                'state_id' => $st->pivot->state_id,
                'state' => $st->name
            ];
        }
        return  response()->json($state);
    }

    public function show_city(Request $request){
        $request->validate([
                    'user_id' => 'required|numeric|min:1'
                ]);        
        $user = User::find($request->user_id);
        $city = [];
        foreach($user->city as $ct){
            $state [] = [
                'city_id' => $ct->pivot->city_id,
                'city' => $ct->name
            ];
        }
        return  response()->json($city);
    }

    public function show_neighborhood(Request $request){
        $request->validate([
                    'user_id' => 'required|numeric|min:1'
                ]);        
        $user = User::find($request->user_id);
        $neighborhood = [];
        foreach($user->neighborhood as $nb){
            $neighborhood [] = [
                'neighborhood_id' => $nb->pivot->neighborhood_id,
                'neighborhood' => $nb->name
            ];
        }
        return  response()->json($neighborhood);
    }

    public function show_street(Request $request){
        $request->validate([
                    'user_id' => 'required|numeric|min:1'
                ]);        
        $user = User::find($request->user_id);
        $street = [];
        foreach($user->street as $st){
            $street [] = [
                'id' => $st->pivot->id,
                'address_numer' => $st->pivot->number,
                'street_id' => $st->pivot->street_id,
                'street' => $st->name
            ];
        }
        return  response()->json($street);
    }


    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=>'required|min:4',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:8',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error', $validator->error());
        }

        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password)
        ]);

        $responseArray = [];
        $responseArray['token'] = $user->createToken('MyApp')->accessToken;
        $responseArray['name'] = $user->name;
        return response()->json($responseArray, 200);
    }

    public function showToken(){
        echo csrf_token();
    }
}
