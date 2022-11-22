<?php

namespace App\Http\Controllers;

use App\Models\SpeciesBreed;
use Illuminate\Http\Request;

class SpeciesBreedController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SpeciesBreed  $speciesBreed
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $s = [];
        foreach(SpeciesBreed::all() as $spe){
            $s [] = [
                'specie' => $spe->specie,
                'breed' => $spe->breed
            ];
        }
        return response()->json($s);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SpeciesBreed  $speciesBreed
     * @return \Illuminate\Http\Response
     */
    public function edit(SpeciesBreed $speciesBreed)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SpeciesBreed  $speciesBreed
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SpeciesBreed $speciesBreed)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SpeciesBreed  $speciesBreed
     * @return \Illuminate\Http\Response
     */
    public function destroy(SpeciesBreed $speciesBreed)
    {
        //
    }
}
