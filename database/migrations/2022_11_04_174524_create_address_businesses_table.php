<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('address_businesses', function (Blueprint $table) {
            $table->id('ID_AdressBusiness');
            $table->foreignId('ID_Business')->constrained()->cascadeOnDelete();
            $table->foreignId('ID_Address')->constrained()->cascadeOnDelete()->cascadeOnUpdate();            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('address_businesses');
    }
};
