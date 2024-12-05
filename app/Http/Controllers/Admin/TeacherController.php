<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Teacher;
use App\Models\User;
use App\Models\Section;
use App\Models\Subject;
use App\Models\SectionTeacher;
use App\Models\SubjectTeacher;

class TeacherController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Teacher/Index', [
            'teachers' => Teacher::with('section')->paginate(10)
        ]);
    }
    public function create() {
        return Inertia::render('Admin/Teacher/Create');
    }
    public function store(Request $request) {
        $validated = $request->validate([
            "email" => 'required|unique:users,email',
            "password" => 'required',
            "name" => 'required',
            "address" => 'required',
            "gender" => 'required',
            "phone_number" => 'required',
            "birthday" => 'required',
        ]);

        Teacher::create([
            "name" => $validated['name'],
            "email" => $validated['email'],
            "password" => $validated['password'],
            'address' => $validated['address'],
            'gender' => $validated['gender'],
            'phone_number' => $validated['phone_number'],
            'birthday' => $validated['birthday'],
        ]);

        return redirect()->route('teacher.create')->with('success', 'Teacher created successfuly.');
    }



    public function destroy(string $id) {
        $teacher = Teacher::where('id', $id)->first();
        $teacher->delete();

        return redirect()->route('teacher.index')->with('success', 'Teacher deleted successfuly.');
    }

    public function edit(string $id) {
        return Inertia::render('Admin/Teacher/Edit', [
            'teacher' => Teacher::find($id)
        ]);
    }


    public function update(Request $request, string $id) {
        $user = User::where('id', $id)->first();
        $teacher = Teacher::findOrFail($id);

        $teacher->update([
            "name" =>  $request->name,
            "email" =>  $request->email,
            'address' => $request->address,
            'gender' => $request->gender,
            'phone_number' => $request->phone_number,
            'birthday' => $request->birthday,
            'user_id' => $user->id,
        ]);

        return redirect()->back()->with('success', 'Teacher updated successfuly.');
    }

    public function show(string $id) {
        return Inertia::render('Admin/Teacher/Show', [
            'teacher' => Teacher::with('sections')->find($id)
        ]);
    }

 public function assign_section() {
        return Inertia::render('Admin/Teacher/Assign', [
            'sections' => Section::all(),
            'teachers' => Teacher::all()
        ]);
    }

    public function store_assign_section(Request $request) {
        $request->validate([
            "teacher_id" => 'required',
            "section_id" => 'required',
        ]);

        $section = Section::find($request->section_id);
        $teacher = Teacher::find($request->teacher_id);
        /*$section->teachers()->attach($teacher->id);*/

        $section->update([
            "teacher_id" => $teacher->id
        ]);


        // SubjectTeacher::create([
        //     "section_id" => $request->section_id,
        //     "teacher_id" => $request->teacher_id,
        //     "subject_id" => $request->subject_id,
        // ]);

        return redirect()->route('teacher-section.create')->with('success', 'Teacher assigned successfuly.');
    }
    /**/
    /*public function assign_subjects(string $id, string $section_id) {*/
    /*    $subjects = Subject::all();*/
    /*    $teacher = Teacher::find($id);*/
    /*    $section = Section::find($section_id);*/
    /**/
    /*    return Inertia::render('Admin/Teacher/AssignSubject', compact("subjects", "teacher", "section"));*/
    /*}*/
    /*public function store_assign_subjects(Request $request) {*/
    /*    // $section = Section::find($request->section_id);*/
    /*    // $teacher = Teacher::find($request->teacher_id);*/
    /*    // $subject = Subject::find($request->subject_id);*/
    /*    $data = SubjectTeacher::where('teacher_id', $request->teacher_id)->first();*/
    /**/
    /*    if ($data && $data->subject_id == null) {*/
    /*        $data->update([*/
    /*        "subject_id" => $request->subject_id,*/
    /*    ]);*/
    /*        return redirect()->back()->with('success', 'Teacher assigned successfuly.');*/
    /*    }*/
    /**/
    /*    SubjectTeacher::create([*/
    /*            "subject_id" => $request->subject_id,*/
    /*            "section_id" => $request->section_id,*/
    /*            "teacher_id" => $request->teacher_id,*/
    /**/
    /*    ]);*/
    /**/
    /*    return redirect()->back()->with('success', 'Teacher assigned successfuly.');*/
    /*}*/
}
