<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
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

    public function showToken(){
        echo csrf_token();
    }
}
