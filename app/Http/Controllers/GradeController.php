<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Section;
use App\Models\Student;
use App\Models\Subject;
use App\Models\Grade;

class GradeController extends Controller
{
    public function create() {
        $teacherId = Auth::guard('teacher')->user()->id;

        $section = Section::where('teacher_id', $teacherId)->first();

        $students = Student::where('section_id', $section->id)->get();

        $subjects = Subject::whereHas('section', function ($query) use ($teacherId) {
            $query->where('teacher_id', $teacherId);
        })->get();
        return Inertia::render('Teacher/GradeStudent', compact("section", "students", "subjects"));
    }

    public function store(Request $request) {
        /*dd($request->all());*/
        $validated = $request->validate([
            "subjectAverage" => ['required', 'array'],
            "subjectAverage.*" => ['required', 'numeric'],
            "term" => ['required'],
            'studentId' => ['required']
        ]);

        foreach ($request->subjectAverage as $subject_id => $subject_average) {
            $is_passed = $subject_average >= 75 ? '1' : '0';
            Grade::updateOrCreate([
                "subject_id" => $subject_id,
                "student_id" => $request->studentId,
                "term" => $validated["term"],
                /*"semester" => "First Semester"*/
            ],[
                "subject_id" => $subject_id,
                "subject_average" => $subject_average,
                "term" => $request->term,
                "student_id" => $request->studentId,
                "final_average" => "none",
                "semester" => "First Semester",
                "is_passed" => $is_passed
            ]);



        }

        return redirect()->back()->with('success', 'Grades has been submitted.');

    }

}
