<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
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
            'age' => 'required|numeric|min:1',
            'size' => 'numeric|max:100',
            'color' => 'max:100',
            'description' => 'alpha|max:9000',
            'user_id' => 'required|numeric|min:1',
            'species_breed_id' => 'required|numeric|min:1'
        ]);
        $pet = new Pet();
        $pet -> name = $request -> name;
        $pet -> age = $request -> age;
        $pet -> size = $request -> size;
        $pet -> color = $request -> color;
        $pet -> description = $request -> description;
        $pet -> user_id = $request -> user_id;
        $pet -> species_breed_id = $request -> user_id;

        $pet->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        // $pets = Pet::find($request->user_id);
        // return $pets;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function edit(Pet $pet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pet $pet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pet $pet)
    {
        //
    }
}
