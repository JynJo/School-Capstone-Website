<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Grade;
use App\Models\Schedule;
use App\Models\Student;
use Barryvdh\DomPDF\Facade\Pdf;

class StudentController extends Controller
{
    public function login() {
        return Inertia::render('Home/Portal');
    }

    public function authenticate(Request $request) {
        // dd($request->all());

        if (Auth::guard('student')->attempt($request->only('id_number', 'password'))) {
            return redirect()->route("student.grades");
        } else {
             return redirect()->route('student.portal')->withErrors('error', 'User does not exists. Please proceed to the ITC office if error persist.');
        }
    }

    public function grade_page() {
        $student = Auth::guard('student')->user()->with('section')->first();
        $grades = Grade::whereHas('subject', function($query) use ($student) {
            $query->where('student_id', $student->id);
        })->with('subject')->get();


        return Inertia::render('Student/Grades', compact('student', 'grades'));
    }

    public function get_grades(Request $request) {
     
        // dd(Student::all());
        // return response()->json(['message' => $request->id_number]);
        $id_number = $request->only('id_number');
        $student = Student::where('id_number', $id_number)->first();

        if ($student) {
            $grades = Grade::whereHas('subject', function($query) use ($student) {
                $query->where('student_id', $student->id);
            })->with('subject')->get();
            
            return response()->json($grades);
        }

        return response()->json(['message' => null]);

    }

    public function logout(Request $request) {
        Auth::guard('student')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
    public function schedule_show(string $id) {
        if (Auth::guard('student')->user()->section_id != $id) {
            abort(403);
        }

         $schedules = Schedule::with(['day', 'section', 'subject'])
            ->where('section_id', $id)
            ->get();
        $data['schedules'] = $schedules;

        $pdf = Pdf::loadView('pdf.schedule', $data)->setPaper('a4', 'landscape');

        return $pdf->stream();

    }
}
