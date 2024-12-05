<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render("Admin/Dashboard", );
    }

    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|exists:users,email",
            "password" => "required",
        ]);

        if (Auth::attempt($request->only("email", "password"))) {
            if (Auth::user()->role == "student") {
                return redirect()->route("student.profile");
            } else if (Auth::user()->role == "teacher") {
                return redirect()->route("teacher.profile");
            }
        } else {
            return redirect()->back()->with('message', 'User does not exists. Please proceed to the ITC office if error persist.');
        }
        return redirect()->route("admin.dashboard");

    }

    public function logout(Request $request)
    {
        if (Auth::check()) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
        }
        return redirect()->route("login");
    }
}
