<?php

namespace App\Http\Controllers;

use App\Models\AddressUser;
use App\Models\City;
use App\Models\State;
use App\Models\Street;
use App\Models\Neighborhood;
use Illuminate\Http\Request;


class AddressUserController extends Controller
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
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'user_id' => 'required|numeric',
    //         'address_id' => 'required|numeric'
    //     ]);
    //     $addressUser = new AddressUser();
    //     $addressUser -> user_id = $request->user_id;
    //     $addressUser -> address_id = 

    // }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AddressUser  $addressUser
     * @return \Illuminate\Http\Response
     */
    public function show(AddressUser $addressUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AddressUser  $addressUser
     * @return \Illuminate\Http\Response
     */
    public function edit(AddressUser $addressUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AddressUser  $addressUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AddressUser $addressUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AddressUser  $addressUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(AddressUser $addressUser)
    {
        //
    }

    
}
