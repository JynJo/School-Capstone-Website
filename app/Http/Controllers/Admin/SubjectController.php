<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Subject;
use App\Models\Section;
use Inertia\Inertia;

class SubjectController extends Controller
{
    public function create() {
        return Inertia::render('Admin/Subject/SubjectCreate');
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'subject_name' => 'required|min:2|unique:subjects,name'
        ]);

        Subject::create([
            'name' => $validated['subject_name']
        ]);

        return back()->with('success', 'Subject created successfuly.');
    }

    public function edit(int $id) {
        return Inertia::render('Admin/Subject/SubjectEdit', ['subject' => Subject::find($id)]);
    }

    public function update(int $id, Request $request) {
        $validated = $request->validate([
            'name' => [
                'required',
                'min:2',
                Rule::unique('subjects', 'name')->ignore($id)
            ],
        ]);

       $subject = Subject::findOrFail($id);
       $subject->update($validated);

       return redirect()->route('subject.index')->with('success', 'Subject updated successfuly.');
    }

    public function destroy(int $id) {
        $subject = Subject::findOrFail($id);
        $subject->delete();

       return back()->with('success', 'Section deleted successfuly.');
    }

    public function assigned_subjects(string $section_id) {
        $subjects = Section::with('subjects')->find($section_id);
        return response()->json($subjects);
    }
}
