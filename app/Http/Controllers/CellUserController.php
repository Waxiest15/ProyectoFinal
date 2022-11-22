<?php

namespace App\Http\Controllers;

use App\Models\CellUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CellUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'phone' => 'required|min:10',
            //'user_id' => 'required|numeric|min:1'
        ]);
        $cellUser = new CellUser();
        $cellUser -> phone = $request -> phone;
        $cellUser -> user_id = Auth::user()->id;//$request -> user_id;//CHECAR
        $cellUser -> save();       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CellUser  $cellUser
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)//Retorna un JSON con todos los teléfonos con base a un user_id
    {
        $cellUser = CellUser::where('user_id',$request->user_id)->get();//CHECAR
        $cells = [];

        foreach($cellUser as $cell){
            $cells[] = [
                'phone' => $cell -> phone
            ];
        }
        return response()->json($cells);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CellUser  $cellUser
     * @return \Illuminate\Http\Response
     */
    public function edit(CellUser $cellUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CellUser  $cellUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)//Módifica el número con base a el user_id
    {
        $request->validate([
            'phone' => 'required|min:10',
           //'user_id' => 'required|numeric|min:1'
        ]);
        $cellUser = CellUser::find(Auth::user()->id);//CHECAR
        $cellUser -> phone = $request -> phone;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CellUser  $cellUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'phone' => 'required|min:10',
            //'user_id' => 'required|numeric|min:1'
        ]);
        CellUser::where('user_id',Auth::user()->id)//CHECAR
        ->where('phone', '=' ,$request->phone)->delete();
    }
}
