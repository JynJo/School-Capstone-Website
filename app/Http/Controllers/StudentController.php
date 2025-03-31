<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

class StudentController extends Controller
{
    
    public function login() {
        return Inertia::render('Home/StudentPortal');
    }

    public function authenticate(Request $request) {
        if (Auth::guard('student')->attempt($request->only('id_number', 'password'))) {
            return redirect()->route("student.home");
        } 

        return redirect()->route('student.portal')->withErrors('error', 'User does not exists. Please proceed to the ITC office if error persist.');
    }


    public function logout(Request $request) {
        Auth::guard('student')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }

}
