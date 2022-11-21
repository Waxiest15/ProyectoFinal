<?php

use App\Http\Controllers\CellBusinessController;
use App\Http\Controllers\CellUserController;
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
Route::post('/users',[UserController::class, 'test']);
Route::post('/user_store',[UserController::class, 'store']);
Route::post('/user_buy',[UserController::class, 'buy_products']);
Route::post('/user_past_shopping',[UserController::class, 'past_shopping']);
Route::post('/user_make_comment',[UserController::class, 'make_comment']);
Route::post('/user_add_shopping_cart_products',[UserController::class, 'add_shopping_cart_products']);
Route::post('/user_quit_from_shopping_cart',[UserController::class, 'quit_from_shopping_cart']);

//Routes CellUser
Route::post('/cellUser_store', [CellUserController::class, 'store']);
Route::post('/cellUser_show', [CellUserController::class, 'show']);
Route::post('/cellUser_update', [CellUserController::class, 'update']);
Route::post('/cellUser_destroy', [CellUserController::class, 'destroy']);

//Routes CellBusiness
Route::post('/cellBusiness_store', [CellBusinessController::class, 'store']);
Route::post('/cellBusiness_show', [CellBusinessController::class, 'show']);
Route::post('/cellBusiness_update', [CellBusinessController::class, 'update']);
Route::post('/cellBusiness_destroy', [CellBusinessController::class, 'destroy']);

//