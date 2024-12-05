<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class AdminController extends Controller
{
    public function login() {
        return Inertia::render('Admin/Portal');
    }

    public function authenticate(Request $request) {
        if (Auth::guard('admin')->attempt($request->only('email', 'password'))) {
            return redirect()->route("admin.dashboard");
        } else {
             return redirect()->route('admin.login-page')->withErrors('error', 'User does not exists. Please proceed to the ITC office if error persist.');
        }
    }
    public function logout(Request $request) {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
