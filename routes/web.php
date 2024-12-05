<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Admin\EventController;
use App\Http\Controllers\Admin\SubjectController;
use App\Http\Controllers\Admin\SectionSubjectController;
use App\Http\Controllers\Admin\GradeController;
use App\Http\Controllers\Admin\ScheduleController;
use App\Http\Controllers\Admin\TeacherController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\NewsController;
use Inertia\Inertia;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/admission', [PageController::class, 'admission_page'])->name('admission.index');
Route::get('/events', [App\Http\Controllers\EventController::class, 'index'])->name('events');
Route::get('/about', [PageController::class, 'about'])->name('about');

Route::get('/news/{title}', [NewsController::class, 'show'])->name('news.show');

// Student Auth
Route::get('login', [App\Http\Controllers\StudentController::class, 'login']);
Route::post('logout', [App\Http\Controllers\StudentController::class, 'logout'])->name('student.logout');
Route::post('/login', [App\Http\Controllers\StudentController::class, 'authenticate'])->name('login');
// Admin Auth
Route::get('admin/login', [AdminController::class, 'login'])->name('admin.login-page');
Route::post('admin/login', [AdminController::class, 'authenticate'])->name('admin.login');
Route::post('admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
// Teacher Auth
Route::get('teacher/login', [App\Http\Controllers\TeacherController::class, 'login'])->name('teacher.login-page');
Route::post('teacher/login', [App\Http\Controllers\TeacherController::class, 'authenticate'])->name('teacher.login');
Route::post('teacher/logout', [App\Http\Controllers\TeacherController::class, 'logout'])->name('teacher.logout');


// Announcement
/*Route::get('announcemen'announcement't');*/

// Student
Route::middleware('student.guard')->prefix('student')->group(function() {
    Route::get('/', [PageController::class, 'student_page'])->name('student.profile');
    Route::get('/grades', [\App\Http\Controllers\StudentController::class, 'grade_page'])->name('student.grades');
    Route::get('schedule/{id}', [\App\Http\Controllers\StudentController::class, 'schedule_show'])->name('student-schedule.show');
});

// Teacher
Route::middleware('teacher.guard')->prefix('teacher')->group(function() {
    Route::get('/', [\App\Http\Controllers\TeacherController::class, 'index'])->name('teacher.profile');
    Route::get('/announcement', [\App\Http\Controllers\TeacherController::class, 'announcement'])->name('teacher.announcement');
    /*Route::get('/get-teacher-students/${section_id}', [\App\Http\Controllers\TeacherController::class, 'get_students'])->name('teacher.get-students');*/
    /*Route::get('get-students/${id}', [PageController::class, 'get_students'])->name('teacher.get_students');*/

    // Route::get('/grades', [PageController::class, 'student_grade_page'])->name('student.grades');
    // Route::get('/schedule', [PageController::class, 'student_schedule_page'])->name('student.schedule');
});

// Grades
Route::middleware('teacher.guard')->prefix('teacher')->group(function() {
    Route::get('grade-create', [\App\Http\Controllers\GradeController::class, 'create'])->name('teacher-grade.create');
    Route::post('grade-store', [\App\Http\Controllers\GradeController::class, 'store'])->name('grades.store');

});


Route::prefix('admin')->middleware('admin.guard')->group(function () {
    Route::get('/dashboard', function() {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
        // admin/student-specific routes go here
    Route::prefix('student')->group(function () {
        Route::get('list', [StudentController::class, 'index'])->name('student.index');
        Route::get('create', [StudentController::class, 'create'])->name('student.create');
        Route::post('store', [StudentController::class, 'store'])->name('student.store');
        Route::get('edit/{id}', [StudentController::class, 'edit'])->name('student.edit');
        Route::put('update/{id}', [StudentController::class, 'update'])->name('student.update');
        Route::delete('destroy/{id}', [StudentController::class, 'destroy'])->name('student.destroy');
    });

        // admin/teacher-specific routes go here
     Route::prefix('teacher')->group(function () {
        // Resources
        Route::get('list', [TeacherController::class, 'index'])->name('teacher.index');
        Route::get('create', [TeacherController::class, 'create'])->name('teacher.create');
        Route::post('store', [TeacherController::class, 'store'])->name('teacher.store');
        Route::get('edit/{id}', [TeacherController::class, 'edit'])->name('teacher.edit');
        Route::put('update/{id}', [TeacherController::class, 'update'])->name('teacher.update');
        Route::delete('destroy/{id}', [TeacherController::class, 'destroy'])->name('teacher.destroy');
        Route::get('show/{id}', [TeacherController::class, 'show'])->name('teacher.show');


        // Assigning section to teacher
        Route::get('teacher-section', [TeacherController::class, 'assign_section'])->name('teacher-section.create');
        Route::post('teacher-section', [TeacherController::class, 'store_assign_section'])->name('teacher-section.store');

        // Assigning subject to teacher
        /*Route::get('teacher-subject/${id}/${section_id}', [TeacherController::class, 'assign_subjects'])->name('teacher-subject.create');*/
        /*Route::post('teacher-subject', [TeacherController::class, 'store_assign_subjects'])->name('teacher-subject.store');*/
    });

    // admin/section-specific routes go here
    Route::prefix('section')->group(function() {
        Route::get('list', [SectionController::class, 'index'])->name('section.index');
        Route::get('create', [SectionController::class, 'create'])->name('section.create');
        Route::post('store', [SectionController::class, 'store'])->name('section.store');
        Route::get('edit/{id}', [SectionController::class, 'edit'])->name('section.edit');
        Route::put('update/{id}', [SectionController::class, 'update'])->name('section.update');
        Route::delete('destroy/{id}', [SectionController::class, 'destroy'])->name('section.destroy');
    });
    // admin/subject-specific routes go here
    Route::prefix('subject')->group(function() {
        Route::get('list', [SubjectController::class, 'index'])->name('subject.index');
        Route::get('create', [SubjectController::class, 'create'])->name('subject.create');
        Route::post('store', [SubjectController::class, 'store'])->name('subject.store');
        Route::get('edit/{id}', [SubjectController::class, 'edit'])->name('subject.edit');
        Route::put('update/{id}', [SubjectController::class, 'update'])->name('subject.update');
        Route::delete('destroy/{id}', [SubjectController::class, 'destroy'])->name('subject.destroy');
        // assigned_subjects
        Route::get('assigned_subjects/${section_id}', [SubjectController::class, 'assigned_subjects'])->name('get.assigned_subjects');
    });

    Route::prefix('section-subject')->group(function() {
        Route::get('list', [SectionSubjectController::class, 'index'])->name('section-subject.index');
        Route::get('create', [SectionSubjectController::class, 'create'])->name('section-subject.create');
        Route::post('store', [SectionSubjectController::class, 'store'])->name('section-subject.store');
        Route::get('edit/{section_id}-{subject_id}', [SectionSubjectController::class, 'edit'])->name('section-subject.edit');
        Route::put('update/{section_id}-{subject_id}', [SectionSubjectController::class, 'update'])->name('section-subject.update');
        Route::delete('destroy/{section_id}-{subject_id}', [SectionSubjectController::class, 'destroy'])->name('section-subject.destroy');

    });

    Route::prefix('grade')->group(function() {
        Route::get('list', [GradeController::class, 'index'])->name('grade.index');
        Route::get('create', [GradeController::class, 'create'])->name('grade.create');
        Route::post('store', [GradeController::class, 'store'])->name('grade.store');
        Route::get('get_students/{section_id}', [GradeController::class, 'get_students'])->name('get.students');
    });

        Route::prefix('schedule')->group(function() {
        Route::get('list', [ScheduleController::class, 'index'])->name('schedule.index');
        Route::get('show/{id}', [ScheduleController::class, 'show'])->name('schedule.show');
        Route::post('store', [ScheduleController::class, 'store'])->name('schedule.store');
        Route::get('create', [ScheduleController::class, 'create'])->name('schedule.create');
        Route::get('get_schedule/i{section_id}', [ScheduleController::class, 'get_schedule'])->name('get.schedule');
    });

    Route::prefix('announcement')->group(function() {
        Route::get('index', [AnnouncementController::class, 'index'])->name('announcement.index');
        Route::get('create', [AnnouncementController::class, 'create'])->name('announcement.create');
        Route::post('store', [AnnouncementController::class, 'store'])->name('announcement.store');
        Route::get('show/{id}', [AnnouncementController::class, 'show'])->name('announcement.show');
        Route::post('delete/{id}', [AnnouncementController::class, 'destroy'])->name('announcement.delete');
        Route::get('edit/{id}', [AnnouncementController::class, 'edit'])->name('announcement.edit');
        Route::post('update/{id}', [AnnouncementController::class, 'update'])->name('announcement.update');
    });


    Route::prefix('events')->group(function() {
        Route::get('index', [EventController::class,  'index'])->name('events.index');
        Route::get('create', [EventController::class,  'create'])->name('events.create');
        Route::post('store', [EventController::class,  'store'])->name('events.store');
        Route::delete('destroy/{id}', [EventController::class,  'destroy'])->name('events.destroy');

    });

});
