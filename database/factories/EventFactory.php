<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(5), // Random event title
            'description' => $this->faker->paragraph(3), // Random description
            'date' => $this->faker->dateTimeBetween('now', '+1 year')->format('Y-m-d'), // Random future date
            'category' => $this->faker->randomElement(['Academic', 'Community', 'Sports', 'Arts', 'Others']), // Random category
            'image' => $this->faker->imageUrl(640, 480, 'events', true, 'Event'), // Random image URL
        ];
    }
}
