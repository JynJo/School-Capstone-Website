<?php

namespace App\Http\Controllers\Admin;

use App\Models\Announcement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Models\Event;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Announcement/Index', [
            'announcements' => Announcement::paginate(5),
            'events' => Event::paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Announcement/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /*dd($request->all());*/
        $request->validate([
            'title' => ['required', 'min:3'],
            'content' => ['required', 'min:10'],
            'noticeFor' => ['required', 'in:teachers,students,parents,public'],
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:7168'],

        ]);

        $image = $request->file('image');
        $image_name = time() . '_' . $image->getClientOriginalName();
        $image_path = $image->storeAs('announcement_images', $image_name, 'public');
        Announcement::create([
            'title' => $request->title,
            'content' => $request->content,
            'notice_for' => $request->noticeFor,
            'image' => $image_path
        ]);
        return redirect()->back()->with('success', 'Announcement created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $announcement = Announcement::findOrFail($id);

        return Inertia::render('Admin/Announcement/Show', compact('announcement'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $announcement = Announcement::findOrFail($id);

        return Inertia::render('Admin/Announcement/Edit', compact('announcement'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        /*dd($request->all());*/
        $request->validate([
            'title' => ['required', 'min:3'],
            'content' => ['required', 'min:10'],
            'noticeFor' => ['required', 'in:teachers,students,parents,public'],
            'image' => ['nullable','image', 'mimes:jpeg,png,jpg,gif,svg', 'max:7168'],
        ]);


        $announcement = Announcement::findOrFail($id);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_name = time() . '_' . $image->getClientOriginalName();
            $image_path = $image->storeAs('announcement_images', $image_name, 'public');

            $announcement->update([
            'title' => $request->title,
            'content' => $request->content,
            'notice_for' => $request->noticeFor,
            'image' => $image_path
            ]);

            return redirect()->back()->with('success', 'Announcement updated.');
            /*return response()->json(['success' => 'Announcement updated.']);*/

        }

        $announcement->update([
            'title' => $request->title,
            'content' => $request->content,
            'notice_for' => $request->noticeFor,
        ]);

        return redirect()->back()->with('success', 'Announcement updated.');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $announcement = Announcement::findOrFail($id);
        Storage::disk('public')->delete($announcement->image);
        $announcement->delete();
        return redirect()->back()->with('success', 'Announcement deleted.');
    }
}
