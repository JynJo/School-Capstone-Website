<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Section;
use App\Models\Subject;
use App\Models\Day;
use App\Models\Schedule;
use Barryvdh\DomPDF\Facade\Pdf;


class ScheduleController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'section_id' => 'required|exists:sections,id',
            'image' => 'required|image'
        ]);

        $image = $request->file('image');
        $image_name = time() . '_' . $image->getClientOriginalName();
        $image_path = $image->storeAs('schedules', $image_name, 'public');


        Schedule::updateorCreate([
            'section_id' => $validated['section_id'],
        ], [
            'section_id' => $validated['section_id'],
            'image' => $image_path
        ]);

        return redirect()->back()->with('success', 'Schedule added successfuly.');
    }
}
