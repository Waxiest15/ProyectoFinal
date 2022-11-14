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
        Schema::create('cell_businesses', function (Blueprint $table) {
            $table->id('ID_CellBusiness');
            $table->string('phone', 20);
            $table->foreignId('ID_Business')->constrained('businesses', 'ID_Business')->cascadeOnDelete();
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
        Schema::dropIfExists('cell_businesses');
    }
};
