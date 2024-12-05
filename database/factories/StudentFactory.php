<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Student;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Student::class;
    public function definition(): array
    {
        return [
            'user_id' => \App\Models\User::factory(),
            'section_id' => fake()->numberBetween(1, 2), 
            'id_number' => fake()->unique()->randomNumber(8),
            'blood_type' => fake()->randomElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']), 
            'address' => fake()->address(), 
            'birthday' => fake()->date('Y-m-d', '2000-01-01'), 
            'gender' => fake()->randomElement(['male', 'female', 'other']),
            'parent_no' => fake()->phoneNumber(),
        ];
    }
}
