<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CellBusinessController;
use App\Http\Controllers\CellUserController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\NeighborhoodController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\StreetController;
use App\Http\Controllers\PetController;
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
Route::post('/users',[UserController::class, 'show_users']);
Route::post('/user_store',[UserController::class, 'store']);
Route::post('/user_buy',[UserController::class, 'buy_products']);
Route::post('/user_past_shopping',[UserController::class, 'past_shopping']);
Route::post('/user_make_comment',[UserController::class, 'make_comment']);
Route::post('/user_delete_comment',[UserController::class, 'delete_comment']);
Route::post('/user_add_shopping_cart_products',[UserController::class, 'add_shopping_cart_products']);
Route::post('/user_show_shopping_cart',[UserController::class, 'show_shopping_cart']);
Route::post('/user_quit_from_shopping_cart',[UserController::class, 'quit_from_shopping_cart']);
Route::post('/user_add_wishlist_products',[UserController::class, 'add_wishlist_products']);
Route::post('/user_quit_from_wishlist',[UserController::class, 'quit_from_wishlist']);
Route::post('/user_show_wishlist',[UserController::class, 'show_wishlist']);
Route::post('/user_add_address',[UserController::class, 'add_address']);//Esta y la de abajo 
Route::post('/user_show_addresss',[UserController::class, 'show_addresss']);

Route::post('/user_show_pets',[UserController::class, 'show_pets']);


//Routes CellUser show_addresss
Route::post('/cellUser_store', [CellUserController::class, 'store']);
Route::post('/cellUser_show', [CellUserController::class, 'show']);
Route::post('/cellUser_update', [CellUserController::class, 'update']);
Route::post('/cellUser_destroy', [CellUserController::class, 'destroy']);

//Routes CellBusiness
Route::post('/cellBusiness_store', [CellBusinessController::class, 'store']);
Route::post('/cellBusiness_show', [CellBusinessController::class, 'show']);
Route::post('/cellBusiness_update', [CellBusinessController::class, 'update']);
Route::post('/cellBusiness_destroy', [CellBusinessController::class, 'destroy']);


//Addressstore
Route::post('/address_store', [AddressController::class, 'store']);//Esta y la de arriba
Route::get('/address_test', [AddressController::class, 'test']);
//State
Route::get('/state_show', [StateController::class, 'show']);
Route::post('/state_show_by_id_state', [StateController::class, 'show_by_id_state']);
Route::post('/test', [StateController::class, 'test2']);
//City
Route::get('/city_show', [CityController::class, 'show']);
//Neighborhood
Route::get('/neib_show', [NeighborhoodController::class, 'show']);
//Street
Route::get('/street_show', [StreetController::class, 'show']);


//Pets
Route::post('/pet_store', [PetController::class, 'store']);
Route::post('/pet_show', [PetController::class, 'show']);