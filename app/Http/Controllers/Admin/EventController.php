<?php

namespace App\Http\Controllers\Admin;

use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::paginate(10);
        return Inertia::render('Admin/Events/Index', compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Events/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'date' => 'required|date|after_or_equal:' . now()->subMonths(0)->toDateString() .
              '|before_or_equal:' . now()->addMonths(5)->toDateString(),
            'description' => 'required',
            'category' => 'required',
            'image' => ['required', 'image', 'mimes:jpg,jpeg,png']
        ]);


        $img_path = $request->file('image')->store('event_images', 'public');


        Event::create([
            'title' => $request->title,
            'image' => $img_path,
            'description' => $request->description,
            'category' => $request->category,
            'date' => $request->date
        ]);

        return redirect()->back()->with('success', 'Event created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $event = Event::findOrFail($id);
        Storage::disk('public')->delete($event->image);

        $event->delete();

        return redirect()->back()->with('success', 'Event deleted.');
    }
}
