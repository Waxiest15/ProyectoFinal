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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id('ID_Address');
            $table->foreignId('ID_State')->constrained('states', 'ID_State')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('ID_City')->constrained('cities', 'ID_City')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('ID_Neighborhood')->constrained('neighborhoods', 'ID_Neighborhood')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('ID_Street')->constrained('streets', 'ID_Street')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('numer');
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
        Schema::dropIfExists('addresses');
    }
};
