<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class TwoFactorAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        if (
            Auth::guard('admin')->check() &&
            Auth::guard('admin')->user()->two_factor_code &&
            Auth::guard('admin')->user()->two_factor_expires_at &&
            Auth::guard('admin')->user()->two_factor_expires_at->isFuture()
        ) {
            return redirect()->route('2fa.index');
        }

        return $next($request);
    }
}
