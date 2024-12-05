<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\SectionTeacher;
use App\Models\Teacher;
use App\Models\Section;
use App\Models\Announcement;
class PageController extends Controller
{
    public function index() {
        $news = Announcement::latest()->where('notice_for', 'public')->get();
        return Inertia::render('Home/Index', compact('news'));
    }

    public function login_page() {
        return Inertia::render('Home/Portal');
    }

    public function student_page() {
        return Inertia::render('Student/Index');
    }
    public function teacher_profile() {
        // $students = User::where('role', 'student')->with(['student'])->get();
        return Inertia::render('Teacher/Index');
    }
public function get_students(Request $request, string $id) {
    $teacher = Teacher::where('user_id', $id)->first();
    $pivot = SectionTeacher::where('teacher_id', $teacher->id)->get();
    $sections = $pivot->map(fn($sectionTeacher) => Section::find($sectionTeacher->section_id));
    $sectionName = $request->input('section');
    $sectionIds = $sections->pluck('id');
    $query = User::where('role', 'student')
        ->whereHas('student', function ($query) use ($sectionIds) {
            $query->whereIn('section_id', $sectionIds); // Filter students by section
        })
        ->with(['student', 'student.section']);
    if ($sectionName && $sectionName !== 'None') {
        $query->whereHas('student.section', function($q) use ($sectionName) {
            $q->where('name', $sectionName); // Filter by section name
        });
    }
    $students = $query->get();
    return response()->json([
        'students' => $students,
        'sections' => $sections
    ]);
}
    public function student_schedule_page() {
        return Inertia::render('Student/Schedule');
    }
    public function admission_page() {

        return Inertia::render('Home/AdmissionPage/Index');
    }

    public function about() {
        return Inertia::render('Home/About');
    }
}
