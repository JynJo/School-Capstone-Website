<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Fortify\Contracts\RegisterResponse;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;
use Inertia\Inertia;
class CustomRegisteredUserController extends RegisteredUserController
{
    /**
     * Handle a registration request for the application.
     */
    public function store(Request $request, CreatesNewUsers $creator): RegisterResponse
    {
        /*dd($request->all());*/
        $user = $creator->create($request->all());

        return redirect('/login')->withInput()->with('user', $user);

    }
}

