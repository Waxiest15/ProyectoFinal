<?php

namespace App\Http\Controllers;

use App\Models\CellBusiness;
use Illuminate\Http\Request;

class CellBusinessController extends Controller
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
            'user_id' => 'required|numeric|min:1'
        ]);
        $cellBusiness = new CellBusiness();
        $cellBusiness -> phone = $request -> phone;
        $cellBusiness -> user_id = $request -> user_id;
        $cellBusiness -> save();   
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CellBusiness  $cellBusiness
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $cellBusiness = CellBusiness::where('user_id',$request->user_id)->get();
        $cells = [];

        foreach($cellBusiness as $cell){
            $cells[] = [
                'phone' => $cell -> phone
            ];
        }
        return response()->json($cells);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CellBusiness  $cellBusiness
     * @return \Illuminate\Http\Response
     */
    public function edit(CellBusiness $cellBusiness)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CellBusiness  $cellBusiness
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CellBusiness $cellBusiness)
    {
        $request->validate([
            'phone' => 'required|min:10',
            'user_id' => 'required|numeric|min:1'
        ]);
        $cellBusiness = CellBusiness::find($request->user_id);
        $cellBusiness -> phone = $request -> phone;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CellBusiness  $cellBusiness
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'phone' => 'required|min:10',
            'user_id' => 'required|numeric|min:1'
        ]);
        CellBusiness::where('user_id', $request->user_id)
        ->where('phone', $request->phone)->delete();
    }
}
