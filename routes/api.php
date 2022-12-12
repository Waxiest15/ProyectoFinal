<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CellUserController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\NeighborhoodController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\StreetController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\WishlistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Routes Users
Route::post('/users', [UserController::class, 'show_users']);

Route::post('/user_store', [UserController::class, 'store']);
//Pa comprar




//Shoping Cart








//User->Wishlist

Route::delete('/user_quit_from_wishlist/{id}', [UserController::class, 'quit_from_wishlist']);

Route::post('/user_add_address', [UserController::class, 'add_address']); //Esta y la de abajo 
Route::post('/user_show_addresss', [UserController::class, 'show_addresss']);
Route::post('/user_show_pets', [UserController::class, 'show_pets']);

Route::post('/user_show_state', [UserController::class, 'show_state']);
Route::post('/user_show_city', [UserController::class, 'show_city']);
Route::post('/user_show_neighborhood', [UserController::class, 'show_neighborhood']);
Route::post('/user_show_street', [UserController::class, 'show_street']);



//Addressstore
//Esta y la de arriba 
Route::get('/address_test', [AddressController::class, 'test']);


//State
Route::post('/state_show_by_id_state', [StateController::class, 'show_by_id_state']);
Route::post('/test', [StateController::class, 'test2']);


//Products
Route::post('/product_store', [ProductController::class, 'store']);
Route::get('/product_show_cat', [ProductController::class, 'show_cat']);
Route::get('/product_show_cat_3/{category_id}', [ProductController::class, 'show_cat_3']);



//ShoppingCart
Route::get('/inCart/{user_id}/{product_id}', [ShoppingCartController::class, 'inCart']);


//Rutas Auth

Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', [AuthController::class, 'logout'])->name('logout.user');

Route::get('/login', [AuthController::class, 'login'])->name('login');


Route::middleware('auth:api')->get('/details', [AuthController::class, 'getTaskList']); //To verify from middleware

Route::middleware('auth:api')->get('/user_id', function (Request $request) {
    return $request->user()->id;
});

// Route::middleware('auth:api')->group(function(){


// });








//Routes Auth
Route::middleware('auth:api')->group(function () {
    //User
    Route::post('/user_add_image', [UserController::class, 'add_image']);
    Route::post('/user_add_wishlist_products', [UserController::class, 'add_wishlist_products']);
    Route::post('/user_buy', [UserController::class, 'buy_products']);
    Route::post('/user_add_shopping_cart_products', [UserController::class, 'add_shopping_cart_products']);
    Route::get('/user_show_wishlist/{user_id}', [UserController::class, 'show_wishlist']);
    Route::get('/user/{id}', [UserController::class, 'show_user']);
    Route::get('/user_show_shopping_cart/{user_id}', [UserController::class, 'show_shopping_cart']);
    Route::get('/user_past_shopping/{user_id}', [UserController::class, 'past_shopping']);

    //Celluser
    Route::delete('/cellUser_destroy/{cell_id}', [CellUserController::class, 'destroy']);
    Route::get('/cellUser_show/{user_id}', [CellUserController::class, 'show']);
    Route::post('/cellUser_store', [CellUserController::class, 'store']);
    Route::post('/cellUser_update', [CellUserController::class, 'update']);

    //Comments
    Route::post('/make_comment', [CommentController::class, 'store_comment']);
    Route::post('/update_comment', [CommentController::class, 'update']);
    Route::delete('/comment_delete/{id}', [CommentController::class, 'delete_comment']);

    //Wishlist
    Route::delete('quit_from_wishlist/{id}', [WishlistController::class, 'delete_product']);
    Route::delete('clear_wishlist/{id}', [WishlistController::class, 'clear_cart']);

    //Shopping cart
    Route::delete('quit_from_shopping_cart/{id}', [ShoppingCartController::class, 'delete_product']);
    Route::delete('clear_cart/{id}', [ShoppingCartController::class, 'clear_cart']); 

});



///RUTAS QUE USO 

//Auth
Route::post('/register', [AuthController::class, 'register']);



//Address
Route::post('/address_store', [AddressController::class, 'store']);
Route::delete('/delete_address/{address_id}', [AddressController::class, 'destroy']); //CHECK
Route::get('/address_user/{user_id}', [AddressController::class, 'show_u']);

//Products
Route::get('/product_show_all', [ProductController::class, 'show']);
Route::get('/product_show/{id}', [ProductController::class, 'show_specific']);

//Comments
Route::get('/comment_show/{product_id}', [CommentController::class, 'show']);


//State
Route::get('/state_show', [StateController::class, 'show']);

//City
Route::get('/city_show', [CityController::class, 'show']);

//Neighborhood
Route::get('/neib_show', [NeighborhoodController::class, 'show']);

//Street
Route::get('/street_show', [StreetController::class, 'show']);





///