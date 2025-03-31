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
   
    public function admission_page() {

        return Inertia::render('Home/AdmissionPage/Index');
    }

    public function news() {
        $news = Announcement::latest()->where('notice_for', 'public')->get();
        return Inertia::render('Home/NewsPage', compact('news'));
    }
}
