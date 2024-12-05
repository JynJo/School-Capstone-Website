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
    public function index() {
        $sections = Section::all();
        return Inertia::render('Admin/Schedule/List', compact('sections'));
    }
    public function create() {
        return Inertia::render('Admin/Schedule/CreateSchedule', [
            'sections' => Section::all(),
            'subjects' => Subject::all(),
            'days' => Day::all()
        ]);
    }

    public function store(Request $request) {
        /*dd($request->all());*/
        foreach($request->schedule as $sched) {

            if ($sched['start_time'] && $sched['end_time']) {


            Schedule::updateOrCreate([
                "section_id" => $request->section_id,
                "subject_id" => $request->subject_id,
                "day_id" => $sched['day_id'],
            ], [
                "section_id" => $request->section_id,
                "subject_id" => $request->subject_id,
                "day_id" => $sched['day_id'],
                "start_time" => $sched['start_time'],
                "end_time" => $sched['end_time'],
            ]);
            }
        }

        return redirect()->back()->with('success', 'Schedule added successfuly.');
    }

    public function get_schedule(string $section_id) {
        $schedule = Schedule::with(['day', 'section', 'subject'])->where('section_id', $section_id)->get();

        return response()->json($schedule);
    }

    public function show(string $id) {
        $schedules = Schedule::with(['day', 'section', 'subject'])
            ->where('section_id', $id)
            ->get();
        $data['schedules'] = $schedules;

        $pdf = Pdf::loadView('pdf.schedule', $data)->setPaper('a4', 'landscape');

        return $pdf->stream();
    }

}
