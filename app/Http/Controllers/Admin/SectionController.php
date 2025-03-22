<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use App\Models\Section;
use App\Models\Subject;

class SectionController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Section/SectionList', [
            'sections' => Section::paginate(10),
            'subjects' => Subject::paginate(10),
        ]);
    }

    public function create() {
        return Inertia::render('Admin/Section/SectionCreate');
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'section_name' => 'required|min:2|max:50|unique:sections,name'
        ], [
            'section_name.unique' => 'Section already exists'
        ]);

        Section::create([
            'name' => $validated['section_name']
        ]);

        return redirect()
                ->back()
                ->with('success', 'Section created successfuly.');
    }

    public function edit(int $id) {
        return Inertia::render('Admin/Section/SectionEdit', ['section' => Section::find($id)]);
    }

    public function update(Request $request, int $id) {
        $validated = $request->validate([
            'name' => [
                'required',
                'min:2',
                Rule::unique('sections', 'name')->ignore($id)
            ],
        ]);

       $user = Section::findOrFail($id);
       $user->update($validated);

       return redirect()
                ->route('section.index')
                ->with('success', 'Section updated successfuly.');
    }
    public function destroy(int $id) {
        $user = Section::findOrFail($id);
        $user->delete();

       return back()->with('success', 'Section deleted successfuly.');
    }

}
