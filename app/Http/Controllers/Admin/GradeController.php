<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Section;
use App\Models\Subject;
use App\Models\User;

class GradeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $grades = Grade::with('student.user')->paginate(10);
        return Inertia::render('Admin/Grading/GradesList', compact('grades'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $sections = Section::all();
        return Inertia::render('Admin/Grading/GradingCreate', compact('sections'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'student_id' => ['required'],
            'term' => ['required'],
            'average' => ['required'],
            'subjects.*' => ['required'],
        ], [
            'subjects.*.required' => 'Please fill in all subject fields.',
            'student_id.required' => 'Please select which student to grade.'
        ]);
        $gradedSubjects = [];
        foreach($request->subjects as $subjectId => $grade) {
            $is_passed = '0';
            if ($grade >= 75) {
                $is_passed = '1';
            }
            Grade::updateOrCreate([
                'subject_id' => $subjectId,
                'student_id' => $request->student_id,
                'term' => $validated['term'],
            ], [
                'subject_average' => $grade,
                'term' => $validated['term'],
                'final_average' => $validated['average'],
                'semester' => 'second',
                'is_passed' => $is_passed
            ]);
            
        }
        return back()->with('success', 'Student graded successfuly.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Grade $grade)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Grade $grade)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Grade $grade)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Grade $grade)
    {
        //
    }

    public function get_students(string $section_id) {
        $section = Section::where('id', $section_id)
                    ->with(['students.grades', 'students.user'])
                    ->get();

        $_section = Section::with('subjects')
                    ->where('id', $section_id)
                    ->first();
        $subjects = $_section->subjects;

        return response()->json(['section' => $section, 'subjects' => $subjects]);
    }


}
