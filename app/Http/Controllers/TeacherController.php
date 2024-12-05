<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\SubjectTeacher;
use App\Models\Section;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Subject;
use App\Models\Announcement;

class TeacherController extends Controller
{
    public function login() {
        return Inertia::render('Teacher/Portal');
    }

    public function authenticate(Request $request) {
        if (Auth::guard('teacher')->attempt($request->only('email', 'password'))) {
            return redirect()->route("teacher.profile");
        } else {
             return redirect()->route('teacher.login-page')->withErrors('error', 'User does not exists. Please proceed to the ITC office if error persist.');
        }
    }

    public function logout(Request $request) {
        Auth::guard('teacher')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }

    public function index() {
        $teacher = Auth::guard('teacher')->user();
        // $sections = Section::with('subject_teacher')->where('teacher_id', $teacher->id)->get();
        $sections = Section::where('teacher_id', $teacher->id)->get();
        /*$subjects = $teacher->subjects;*/


        return Inertia::render('Teacher/Index', [
            'sections' => $sections,
            /*'subjects' => $subjects*/
        ]);
    }

    public function announcement() {
        $announcement = Announcement::latest()->where('notice_for', 'teachers')->first();
        return Inertia::render('Teacher/Announcement', compact('announcement'));
    }
}
