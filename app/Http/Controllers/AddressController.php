<?php

namespace App\Http\Controllers;

use App\Models\Address;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;

class AddressController extends Controller
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
            'state_id' => 'required|numeric',
            'city_id' => 'required|numeric',
            'neighborhood_id' => 'required|numeric',
            'street_id' => 'required|numeric',
            'number' => 'required|numeric'
        ]);
        $address = new Address();
        $address -> state_id = $request ->state_id;
        $address -> city_id = $request -> city_id;
        $address -> neighborhood_id = $request -> neighborhood_id;
        $address -> street_id = $request -> street_id;
        $address -> number = $request -> number;
        $address -> user_id = $request -> user_id;
        $address -> save();
        if($request->business_id){
            $address -> business_id = $request -> business_id;
        }
        
        return response();
    }

    public function last_address(){
        return Address::all()->sortByDesc('updated_at')->first()->id;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        if($request->user_id){
            $address = Address::where('user_id', 1)->get();
        }
        else if($request->business_id){
            $address = Address::where('business_id', 1)->get();
        }   
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function edit(Address $address)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'state_id' => 'required|numeric',
            'city_id' => 'required|numeric',
            'neighborhood_id' => 'required|numeric',
            'street_id' => 'required|numeric',
            'number' => 'required|numeric'
        ]);
        if($request->user_id){
            $address = Address::where('user_id', $request->user_id);
            $address -> state_id = $request ->state_id;
            $address -> city_id = $request -> city_id;
            $address -> neighborhood_id = $request -> neighborhood_id;
            $address -> street_id = $request -> street_id;
            $address -> number = $request -> number;
        }
        else if($request->business_id){
            $address = Address::where('business_id', $request->business_id);
            $address -> business_id = $request -> business_id;
        }
        $address = Address::where();
        $address -> state_id = $request ->state_id;
        $address -> city_id = $request -> city_id;
        $address -> neighborhood_id = $request -> neighborhood_id;
        $address -> street_id = $request -> street_id;
        $address -> number = $request -> number;
        if($request->user_id){
            $address -> user_id = $request -> user_id;
        }
        else if($request->business_id){
            $address -> business_id = $request -> business_id;
        }
        $address -> save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Address::find($request->address_id)->destroy();
    }
}
