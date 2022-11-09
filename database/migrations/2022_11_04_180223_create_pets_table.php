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
        Schema::create('pets', function (Blueprint $table) {
            $table->id('ID_Pet');
            $table->string('name', 100);
            $table->integer('age');
            $table->string('size', 100);
            $table->string('color', 100);
            $table->text('description');
            $table->boolean('state');//perdida o no xd
            $table->foreignId('ID_User')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('ID_SpeciesBreed')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('pets');
    }
};
