<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TwoFactorController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Auth/TwoFactor');
    }

    public function store(Request $request)
    {
        $request->validate([
            'two_factor_code' => 'required|integer',
        ]);

        if (Auth::guard('admin')->user()->two_factor_code !== $request->two_factor_code ||
            Auth::guard('admin')->user()->two_factor_expires_at->lt(now())) {
            return back()->withErrors(['two_factor_code' => 'The 2FA code is invalid or has expired.']);
        }

        Auth::guard('admin')->user()->resetTwoFactorCode();

        return redirect()->route('student.index'); // or your desired route
    }
}