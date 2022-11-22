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
        $pet -> species_breed_id = $request -> species_breed_id;

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
        //
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
    public function destroy(Request $request)
    {
        $request->validate([
            'pet_id' => 'required|numeric|min:1',
            'user_id' => 'required|numeric|min:1'
        ]);
        Pet::where('user_id', $request->user_id)// $request->user_id
        ->where('id', $request->pet_id)->delete();
    }

    public function pet_lost()
    {
        $pets = Pet::where('state','=', 0)->get();
        $p = [];
        foreach($pets as $pet){//actualizo el update para poner cuando se perdió
            $pet -> updated_at = now();
            $pet -> save();
        }
        foreach($pets as $pet){
            $p[] = [
                'name' => $pet->name,
                'age' => $pet->age,
                'color' => $pet->color,
                'description' => $pet->description,
                'lost' => $pet->updated_at
            ];
        }
        return $p;
    }

    
}
