<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Student;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([AdminSeeder::class]);
        
        // $user = User::factory()->create([
        //     'name' => fake()->name(),
        //     'email' => "admin@admin.com",
        //     'role' => 'admin',
        //     'password' => Hash::make('password')
        // ]);



        // User::factory(30)
        //     ->has(Student::factory()) // For each user, create a related student
        //     ->create();

         // User::factory(30)
         //    ->has(Teacher::factory()) // For each user, create a related student
         //    ->create();
    }
}
