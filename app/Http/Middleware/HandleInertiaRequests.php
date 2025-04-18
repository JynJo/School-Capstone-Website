<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Auth;
use App\Models\Schedule;
use App\Models\Announcement;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
            'student' => fn () => Auth::guard('student')->check() ? Auth::guard('student')->user()->load('section') : null,
            'schedule' => fn () => Auth::guard('student')->check() ? Auth::guard('student')->user()->section->schedule()->get() : null,
            
            'grades' => fn () => Auth::guard('student')->check() ? Auth::guard('student')->user()->grades->load('subject') : null,

            'announcements' => fn () => Auth::guard('student')->check() ? Announcement::where('notice_for', 'students')->get() : null,
        ]);
    }
}
