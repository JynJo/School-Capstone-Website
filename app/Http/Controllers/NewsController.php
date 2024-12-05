<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Announcement;

class NewsController extends Controller
{
    public function show(string $title) {
        /*dd($title);*/
        $news = Announcement::where('title', $title)->first();

        return Inertia::render('Home/News/ReadNews', compact('news'));
    }
}
