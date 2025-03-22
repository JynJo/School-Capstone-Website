<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Student;

class GradeController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create(string $id)
    {
        $student = Student::with('section')->findOrFail($id);
        $section = $student->section;
        $subjects = $section->subjects()->get();
        return Inertia::render('Admin/Grading/GradingCreate', compact('student', 'subjects'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'student_id' => ['required'],
            'subjects.*' => ['required'],
        ]);


        foreach($request->subjects as $subject) {
            Grade::updateOrCreate([
                'subject_id' => $subject['subject_id'],
                'student_id' => $request->student_id,
                'term' => $subject['term'],
                'semester' => $subject['semester'],
            ], [
                'term' => $subject['term'],
                'average' => $subject['average'],
                'semester' => $subject['semester'],
            ]);
        }
        return back()->with('success', 'Student graded successfuly.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Student::with('grades.subject', 'section')->findOrFail($id);

        return Inertia::render('Admin/Grading/Show', compact('student'));

    }

}
