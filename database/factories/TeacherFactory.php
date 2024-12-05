<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use App\Models\Teacher;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Teacher::class;
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'password' => Hash::make('password'),
            'address' => fake()->address(), 
            'birthday' => fake()->date('Y-m-d', '2000-01-01'), 
            'gender' => fake()->randomElement(['male', 'female', 'other']),
            'phone_number' => fake()->phoneNumber(),
            // 'section_id' => fake()->numberBetween(1, 2), 
        ];
    }
}
