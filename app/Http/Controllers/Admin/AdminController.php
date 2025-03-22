<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Admin;

class AdminController extends Controller
{
    public function login() {
        return Inertia::render('Admin/Portal');
    }

    public function authenticate(Request $request) {
        if ($request->pin == env('ADMIN_PIN')) {
            $admin = Admin::where('email', 'admin@admin.com')->first();
            Auth::guard('admin')->login($admin);

            return redirect()->route("admin.dashboard");
        }
        
        return redirect()->route('admin.login');
    }
    public function logout(Request $request) {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
