<?php

namespace App\Http\Controllers;

use App\Models\Business;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use App\Models\City;
use App\Models\Neighborhood;
use App\Models\State;
use App\Models\Street;

class BusinessController extends Controller
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
            'name' => 'required|alpha|max:100',
            'description' => 'required',
            'email' => 'required|email',
            'distributor' => 'boolean',
            'rate' => 'requiered|numeric',
            'password' => ['required', Password::min(8)->mixedCase()->numbers()],
            'location_api' => 'json'
        ]);
        $business = new Business();
        $business -> name = $request -> name;
        $business -> description = $request -> description;
        $business -> email = $request -> email;
        $business -> distributor = $request -> distributor;
        $business -> rate = $request -> rate;
        $business -> password = $request -> password;
        $business -> location_api = $request -> location_api;
        $business -> save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function show(Business $business)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function edit(Business $business)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Business $business)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function destroy(Business $business)
    {
        //
    }
    public function add_address(Request $request){
        $request->validate([
            'business_id' => 'required|numeric|min:1'
        ]);
        $request->validate([//CHECAR
            //'business_id' => 'required|numeric',
        ]);
        $business = Business::find($request->business_id);
        $business->addressBusiness()->attach(app(AddressController::class)->last_address());
    }

    public function show_addresss(Request $request){
        $request->validate([
            'business_id' => 'required|numeric|min:1'
        ]);        
        $business = Business::find($request->business_id);
        $p = [];
        foreach($business->addressBusiness as $add){
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
}
