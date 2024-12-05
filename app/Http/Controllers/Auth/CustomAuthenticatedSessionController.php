<?php
namespace App\Http\Controllers\Auth;

use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomAuthenticatedSessionController extends AuthenticatedSessionController
{
    /**
     * Handle the post-login logic.
     */
    public function store(Request $request)
    {
        // Perform the login process using the parent's method
        $response = parent::store($request);

        // Redirect based on user role
        $user = Auth::user();
        switch ($user->role) {
            case 'admin':
                return redirect('/admin/dashboard');
            case 'teacher':
                return redirect('/teacher/');
            case 'student':
                return redirect('/student/');
            default:
                return redirect('/'); // Default fallback
        }
    }
}

