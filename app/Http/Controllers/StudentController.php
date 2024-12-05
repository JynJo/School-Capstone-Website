<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Grade;
class StudentController extends Controller
{
    public function login() {
        return Inertia::render('Home/Portal');
    }
    public function register() {
        return Inertia::render('Student/Register');
    }

    public function authenticate(Request $request) {
        if (Auth::guard('student')->attempt($request->only('email', 'password'))) {
            return redirect()->route("student.profile");
        } else {
             return redirect()->route('login')->withErrors('error', 'User does not exists. Please proceed to the ITC office if error persist.');
        }
    }

    public function grade_page() {
        $student = Auth::guard('student')->user();
        $grades = Grade::whereHas('subject', function($query) use ($student) {
            $query->where('student_id', $student->id);
        })->with('subject')->get();


        return Inertia::render('Student/Grades', compact('student', 'grades'));
    }

    public function logout(Request $request) {
        Auth::guard('student')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
