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
use App\Models\City;
use App\Models\Neighborhood;
use App\Models\State;
use App\Models\Street;
use App\Models\SpeciesBreed;

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
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
            'comment' => 'required'
        ]);
        $user = User::find(Auth::user()->id);//PROBAR
        return $user->comment()->attach($request->product_id, 
        ['date' => now(), 'comment' => $request->comment]);
    }

    public function delete_comment(Request $request){
        $request->validate([
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
            'comment' => 'required'
        ]);
        $user = User::find(Auth::user()->id);//PROBAR
        return $user->comment()->detach($request->product_id);//BORAR TODOS LOS COMENTARIOS HECHOS XD
    }
    
    public function buy_products(Request $request){//Al usuario comprar productos 
        $request->validate([
            //'user_id' => 'required|numeric',
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
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find(Auth::user()->id);//PROBAR
        return $user->shopingcart()->attach($request->product_id, ['date' => now()]);//Se agrega en la tabla shopingcart
    }

    public function quit_from_shopping_cart(Request $request){//Al usuario ingresar productos a su carrito
        $request->validate([//CHECAR
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find(Auth::user()->id);//PROBAR
        $user->shopingcart()->detach($request->product_id);
    }

    public function show_wishlist(Request $request){
        $request->validate([//CHECAR
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);//PROBAR
        $p = [];
        foreach($user->wishlist as $product){
            $p [] = [
                'product' => $product->name,//Generamos el nombre del producto
                'date add' => $product->pivot->date//con base a la tabla intermediaria se obtiene la fecha de compra
            ];
        }
        return response()->json($p);
    }

    public function show_shopping_cart(Request $request){
        $request->validate([//CHECAR
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);//PROBAR
        $p = [];
        foreach($user->shopingcart as $product){
            $p [] = [
                'product' => $product->name,//Generamos el nombre del producto
                'date add' => $product->pivot->date//con base a la tabla intermediaria se obtiene la fecha de compra
            ];
        }
        return response()->json($p);
    }

    public function past_shopping(Request $request){
        $request->validate([//CHECAR
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);//PROBAR
        $p = [];
        foreach($user->buy as $product){//Iteramos en cada relación de los productos y usuarios
            $p [] = [
                'product' => $product->name,//Generamos el nombre del producto
                'product_price' => $product->price,
                'date of buy' => $product->pivot->date//con base a la tabla intermediaria se obtiene la fecha de compra
            ];
        }
        return response()->json($p);
    }

    public function add_wishlist_products(Request $request){//Al usuario ingresar productos a su wishlist
        $request->validate([
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);//PROBAR
        return $user->wishlist()->attach($request->product_id, ['date' => now()]);//Se agrega en la tabla wishlists
    }

    public function quit_from_wishlist(Request $request){//Al usuario ingresar quitar cosas de su wishlist
        $request->validate([//CHECAR
            //'user_id' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);//PROBAR
        $user->wishlist()->detach($request->product_id);
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

    public function add_address(Request $request){
        $request->validate([
            'user_id' => 'required|numeric|min:1'
        ]);
        $request->validate([//CHECAR
            //'user_id' => 'required|numeric',
        ]);
        $user = User::find($request->user_id);
        $user->addressUser()->attach(app(AddressController::class)->last_address());
    }

    public function show_addresss(Request $request){
        $request->validate([
            'user_id' => 'required|numeric|min:1'
        ]);        
        $user = User::find($request->user_id);
        $p = [];
        foreach($user->addressUser as $add){
            $p [] =[
                'address_id' => $add->pivot->address_id,
                'state_id' => State::find($add->state_id)->name,
                'city_id' => City::find($add->city_id)->name,
                'neighborhood_id' => Neighborhood::find($add->neighborhood_id)->name,
                'street_id' => Street::find($add->street_id)->name
            ];
        }
        return response()->json($p);
    }

    public function show_pets(Request $request){
        $request->validate([
            'user_id' => 'required|numeric|min:1'
        ]);
        $pets = User::find($request->user_id);
        $p = [];
        
        foreach($pets->pet as $pett){
            $p [] = [
                'name' => $pett->name,
                'age' => $pett->age,
                'color' => $pett->color,
                'size' => $pett->size,
                'description' => $pett->description,
                'specie' => SpeciesBreed::find($pett->species_breed_id)->specie,
                'breed' => SpeciesBreed::find($pett->species_breed_id)->breed,
            ];
        }
        return  response()->json($p);
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
