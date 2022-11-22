<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use App\Models\Category;
use App\Models\Business;

class ProductController extends Controller
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
        // $request->validate([
        //     'name' => 'required|alpha|max:100',
        //     'size' => '',
        //     'weight' => 'numeric|min:1',
        //     'price' => 'required|numeric|min:1',
        //     'description' => 'required|min:20',
        //     'rate' => 'numeric',
        //     'amount' => 'required|numeric',
        //     'enable' => 'boolean',
        //     'deliverTime' => 'required|numeric|min:1',
        //     'category_id' => 'required|numeric|min:1',
        //     'business_id' => 'required|numeric|min:1'
        // ]);
        $product = new Product();
        $product -> name = $request -> name;
        $product -> size = $request -> size;
        $product -> weight = $request ->weight;
        $product -> price = $request -> price;
        $product -> rate = $request -> rate;
        $product -> description = $request -> description;
        $product -> amount = $request -> amount;
        $product -> enable = $request -> enable;
        $product -> deliverTime = $request -> deliverTime;
        $product -> category_id = $request -> category_id;
        $product -> business_id = $request -> business_id;
        $product -> save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $p = [];
        foreach($products = Product::all() as $product){
            $p [] = [
                'name' => $product->name,
                'size' => $product->size,
                'weight' => $product->weight,
                'price' => $product->price,
                'rate' => $product->rate,
                'description' => $product->description,
                'amount'=> $product->amount,
                'deliverTime' => $product->deliverTime,
                'category_id' => Category::find($product->category_id)->name,
                'business_id' => Business::find($product->business_id)->name
            ];
        }
        return response()->json($p);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
