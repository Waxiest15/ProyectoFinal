<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Validator;
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
        $request->validate([
            'name' => 'required|max:100',
            'size' => 'max:100',
            'weight' => 'numeric|min:1',
            'price' => 'required|numeric|min:1',
            'description' => 'required|min:20',
            'rate' => 'numeric',
            'amount' => 'required|numeric',
            'deliverTime' => 'required|numeric|min:1',
            'category_id' => 'required|numeric|min:1'
        ]);
        $product = new Product();
        $product->name = $request->name;
        $product->size = $request->size;
        $product->weight = $request->weight;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->rate = $request->rate;
        $product->amount = $request->amount;
        if ($request->image) {
            $product->image = $request->image;
        }
        //$product -> enable = $request -> enable;
        $product->deliverTime = $request->deliverTime;
        $product->category_id = $request->category_id;
        $product->user_id = $request->user_id;
        $product->save();
    }

    public function show_specific($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $products = Product::where('enable', true)->get();
        $p = [];
        foreach ($products as $product) {
            $p[] = [
                'id' => $product->id,
                'name' => $product->name,
                'size' => $product->size,
                'weight' => $product->weight,
                'price' => $product->price,
                'rate' => $product->rate,
                'description' => $product->description,
                'amount' => $product->amount,
                'image' => $product->image,
                'deliverTime' => $product->deliverTime,
                'brand' => $product->brand,
                'category_id' => Category::find($product->category_id)->name,
            ];
        }
        return response()->json($p);
    }

    public function show_cat_3($category_id)
    {
        $pp = Product::where('category_id', $category_id)->where('enable', true)->limit(3)->get();
        $p = [];
        foreach ($pp as $pro) {
            $p[] = [
                'id' => $pro->id,
                'name' => $pro->name,
                'size' => $pro->size,
                'weight' => $pro->weight,
                'price' => $pro->price,
                'rate' => $pro->rate,
                'description' => $pro->description,
                'amount' => $pro->amount,
                'image' => $pro->image,
                'deliverTime' => $pro->deliverTime,
                'category_id' => Category::find($pro->category_id)->name,
            ];
        }
        return response()->json($p);
    }

    public function show_cat(Request $request)
    {
        $pp = Product::where('category_id', $request->category_id)->get();
        $p = [];
        foreach ($pp as $pro) {
            $p[] = [
                'name' => $pro->name,
                'size' => $pro->size,
                'weight' => $pro->weight,
                'price' => $pro->price,
                'rate' => $pro->rate,
                'description' => $pro->description,
                'amount' => $pro->amount,
                'image' => $pro->image,
                'deliverTime' => $pro->deliverTime,
                'category_id' => Category::find($pro->category_id)->name,
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
