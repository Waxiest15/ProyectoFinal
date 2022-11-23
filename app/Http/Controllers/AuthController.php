<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|alpha|max:100',
            'last_name' => 'required|alpha|max:100',
            'last_name2' => 'required|alpha|max:100',
            'birth' => 'required|date_format:Y-m-d',
            'gender' => 'required',
            'email' => 'required|email',
            'password' => ['required', Password::min(8)->mixedCase()->numbers()]
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error', $validator->error());
        }

        $user=User::create([
            'name'=>$request->name,
            'last_name'=>$request->last_name,
            'last_name2'=>$request->last_name2,
            'birth'=>$request->birth,
            'gender'=>$request->gender,
            'email'=>$request->email,
            'password'=>bcrypt($request->password)
        ]);

        $responseArray = [];
        $responseArray['token'] = $user->createToken('MyApp')->accessToken;
        $responseArray['name'] = $user->name;
        return response()->json($responseArray, 200);
    }
    
    public function login(Request $request){
        
        if (Auth::attempt(['email'=>$request->email, 'password'=>$request->password])){
            $user = Auth::user();
            $responseArray = [];
            $responseArray['token'] = $user->createToken('MyApp')->accessToken;
            $responseArray['name'] = $user->name;
            return response()->json($responseArray, 200);
        } else {
            return response()->json(['error'=>'Unauthorised'], 203);
        }
    }

    public function getTaskList(){
        $data = User::all();
        $responseArray = [
            'status' =>'ok',
            'res'=>$data
        ];
        return response()->json(['results'=>$responseArray],200);
    }
}
