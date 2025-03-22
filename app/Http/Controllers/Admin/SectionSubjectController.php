<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use App\Models\Section;
use App\Models\Subject;
use Inertia\Inertia;
use App\Models\SectionSubject;
class SectionSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $section_subject = Section::with(['subjects'])->paginate(10);
        return Inertia::render('Admin/SectionSubject/List', compact('section_subject'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/SectionSubject/Create', [
            'sections' => Section::all(),
            'subjects' => Subject::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'section_id' => 'required',
            'subject_id' => 'required',
        ]);

        $exists = DB::table('section_subject')
            ->where('section_id', $validated['section_id'])
            ->where('subject_id', $validated['subject_id'])
            ->exists();

        if ($exists) {
            return redirect()->back()
                ->withErrors(['subject_id' => 'The subject is already assigned to this section.'])
                ->withInput();
        }

        SectionSubject::create($validated);

        return redirect()->back()->with('success', 'Subject assigned successfuly.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
    
        $subjects = Section::with('subjects')->find($id);

        return Inertia::render('Admin/SectionSubject/Show', [
            'subjects' => $subjects
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $section_id, string $subject_id)
    {
        $section = Section::find($section_id);
        $subject = Subject::find($subject_id);
        $subjects = Subject::where('id', '!=', $subject_id)->get();

        return Inertia::render('Admin/SectionSubject/Edit', compact('section', 'subject', 'subjects'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(string $section_id, string $subject_id, Request $request)
    {
        $validated = $request->validate([
            'subject_id' => [
                'required',
                Rule::unique('section_subject')
                    ->where(function ($query) use ($section_id) {
                        return $query->where('section_id', $section_id);
                    })
                    ->ignore($subject_id, 'subject_id') // Ignore the current record
            ],
        ]);

        $section_subject = SectionSubject::where('section_id', $section_id)
                    ->where('subject_id', $subject_id)
                    ->first();
        $section_subject->update($validated);

        return back()->with('message', 'Combination updated successfuly.');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $section_id, string $subject_id)
    {
       $section_subject = SectionSubject::where('section_id', $section_id)
                    ->where('subject_id', $subject_id)
                    ->delete();

        return back()->with('message', 'Combination deleted successfuly.');
    }
}
