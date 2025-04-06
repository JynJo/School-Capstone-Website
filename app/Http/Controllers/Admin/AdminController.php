<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Admin;
use Illuminate\Auth\Events\Registered;
class AdminController extends Controller
{
    public function login() {
        return Inertia::render('Admin/Portal');
    }



    public function account() {
        return Inertia::render('Admin/Account/Index', [
            'admin' => Auth::guard('admin')->user()
        ]);
    }

    public function update_email(Request $request) {
        $request->validate([
            'email' => 'required|email|unique:admins,email,' . Auth::guard('admin')->user()->id,
        ]);

        $user = Auth::guard('admin')->user();

        if ($request->email !== $user->email) {
            $user->email = $request->email;
            $user->email_verified_at = null; // This forces re-verification
            $user->save();

            // Trigger the email verification notification
            $user->sendEmailVerificationNotification();

            return redirect()->back()->with('success', 'Email updated successfully. Please verify your new email address.');
        }

        return redirect()->back()->with('info', 'No changes were made to your email.');
    }

    public function update_password(Request $request) {
        $request->validate([
            'password' => 'required|min:8|confirmed',
        ]);

        $admin = Auth::guard('admin')->user();
        $admin->password = bcrypt($request->password);
        $admin->save();



        return redirect()->back()->with('success', 'Password updated successfully.');
    }

    public function authenticate(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('admin')->attempt($request->only('email', 'password'))) {
            $admin = Auth::guard('admin')->user();
            $admin->generateTwoFactorCode(); // Generate a 2FA code for the admin

            return redirect()->route('2fa.index'); // Redirect to the 2FA verification page
        }

        return redirect()->back()->withErrors(['email' => 'Invalid credentials.']);
    }

    // protected function authenticated(Request $request, $user)
    // {
    //     $user->generateTwoFactorCode();

    //     return redirect()->route('2fa.index');
    // }

    public function logout(Request $request) {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/home');
    }
}
