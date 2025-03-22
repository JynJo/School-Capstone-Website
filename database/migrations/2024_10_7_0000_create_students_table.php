<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('address');
            $table->string('blood_type');
            $table->string('id_number');
            $table->string('birthday');
            $table->string('gender');
            $table->string('parent_no');
            $table->rememberToken();
            $table->timestamp('email_verified_at')->nullable();
            $table->unsignedBigInteger('section_id');
            $table->timestamps();

            $table->foreign('section_id')
                  ->references('id')
                  ->on('sections')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
