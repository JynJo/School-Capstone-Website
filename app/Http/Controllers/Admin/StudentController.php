<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Crypt;
/*use Illuminate\Support\Facades\Gate;*/
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Student;
use App\Models\Section;
use App\Rules\PhoneNumber;


class StudentController extends Controller
{
    public function index(Request $request) {
        $query = Student::with('section');
        $students = $query->paginate(10);

        return Inertia::render('Admin/Student/StudentList', compact('students'));
    }

    public function create() {
        return Inertia::render('Admin/Student/StudentCreate', [
            'sections' => Section::all()
        ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|min:8|max:40',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|max:20|regex:/\S/|confirmed',
            'section_id' => 'required|numeric',
            'id_number' => 'required|unique:students,id_number',
            'birthday' => 'required',
            'parent_no' => ['required', 'numeric', new PhoneNumber()],
            'gender' => 'required',
            'address' => 'required',
            'blood_type' => 'required',
        ], [
            'name.required' => "Please fill-in the student's name",
            'id_number.required' => "Please fill-in the student's ID Number",
            'parent_no.required' => "Parent's phone number is required.",
            'section_id.numeric' => "Invalid section.",
        ]);

        Student::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
            'section_id' => $validated['section_id'],
            'id_number' => $validated['id_number'],
            'blood_type' => $validated['blood_type'],
            'address' => $validated['address'],
            'birthday' => $validated['birthday'],
            'gender' => $validated['gender'],
            'parent_no' => $validated['parent_no'],
        ]);
        return back()->with('success', 'Student saved successfuly.');
    }

    public function edit(int $id) {
        return Inertia::render('Admin/Student/StudentEdit', [
            'student' => Student::with('section')->find($id),
            'sections' => Section::all()
        ]);
    }

    public function update(Request $request, int $id) {
        $validated = $request->validate([
            'name' => 'min:8|max:40',
            'email' => [
                'email',
                Rule::unique('users', 'email')->ignore($id),
            ],
            'password' => 'nullable|min:6|max:20|confirmed|regex:/\S/',
            'section_id' => 'required',
            'id_number' => 'required',
            'birthday' => 'required',
            'parent_no' => 'required',
            'gender' => 'required',
            'address' => 'required',
            'blood_type' => 'required',
        ], [
            'name.required' => "Please fill-in the student's name",
            'id_number.required' => "Please fill-in the student's ID Number",
            'parent_no.required' => "Parent's phone number is required."
        ]);

        // $user->update($updatedFields);
        $student = Student::findOrFail($id);;
        $student->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'section_id' => $validated['section_id'],
            'id_number' => $validated['id_number'],
            'blood_type' => $validated['blood_type'],
            'address' => $validated['address'],
            'birthday' => $validated['birthday'],
            'gender' => $validated['gender'],
            'parent_no' => $validated['parent_no'],
        ]);

        if ($request->has('password') && !empty($validated['password'])) {
        $student->update([
            'password' => bcrypt($validated['password']),  // Hash the new password
        ]);
    }

        return back()->with('success', 'Student updated successfuly.');
    }

    public function destroy(int $id) {
        $student = Student::where('user_id', $id);
        $student->delete();

        $user = User::findOrFail($id);
        $user->delete();

        return back()->with('success', 'Student deleted successfuly.');
    }

}
