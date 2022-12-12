<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\State;
use App\Models\City;
use App\Models\Neighborhood;
use App\Models\Street;
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
        $address->state_id = $request->state_id;
        $address->city_id = $request->city_id;
        $address->neighborhood_id = $request->neighborhood_id;
        $address->street_id = $request->street_id;
        $address->number = $request->number;
        $address->user_id = $request->user_id;
        $address->save();
        return response();
    }

    public function last_address()
    {
        return Address::all()->sortByDesc('updated_at')->first()->id;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function show_u($user_id)
    {
        $address = Address::where('user_id', $user_id)->get();
        $a = [];
        foreach($address as $add){
            $a [] = [
                "id" => $add->id,
                "state" => State::find($add->state_id)->name,
                "city" => City::find($add->city_id)->name,
                "neighborhood" => Neighborhood::find($add->neighborhood_id)->name,
                "street" => Street::find($add->street_id)->name,
                "number" => $add->number,
            ];
        }
        return response()->json($a);
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
        if ($request->user_id) {
            $address = Address::where('user_id', $request->user_id);
            $address->state_id = $request->state_id;
            $address->city_id = $request->city_id;
            $address->neighborhood_id = $request->neighborhood_id;
            $address->street_id = $request->street_id;
            $address->number = $request->number;
        } else if ($request->business_id) {
            $address = Address::where('business_id', $request->business_id);
            $address->business_id = $request->business_id;
        }
        $address = Address::where();
        $address->state_id = $request->state_id;
        $address->city_id = $request->city_id;
        $address->neighborhood_id = $request->neighborhood_id;
        $address->street_id = $request->street_id;
        $address->number = $request->number;
        if ($request->user_id) {
            $address->user_id = $request->user_id;
        } else if ($request->business_id) {
            $address->business_id = $request->business_id;
        }
        $address->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function destroy($address_id)
    {
        Address::find($address_id)->delete();
    }
}
