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
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\TwoFactorController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;

Route::middleware('guest')->group(function () {
    Route::get('/home', [PageController::class, 'index'])->name('home');
    Route::redirect('/', '/home');
    Route::get('/admission', [PageController::class, 'admission_page'])->name('admission.index');
    Route::get('/events', [App\Http\Controllers\EventController::class, 'index'])->name('events');
    Route::get('/news', [PageController::class, 'news'])->name('news');
    Route::get('/news/{title}', [NewsController::class, 'show'])->name('news.show');

    Route::get('admin/login', [AdminController::class, 'login']);
    Route::get('portal', [App\Http\Controllers\StudentController::class, 'login'])->name('student.portal');
});

Route::middleware(['throttle:5,1'])->group(function () {
    Route::post('/login', [App\Http\Controllers\StudentController::class, 'authenticate'])->name('login');
    Route::post('logout', [App\Http\Controllers\StudentController::class, 'logout'])->name('student.logout');
    Route::post('admin/login', [AdminController::class, 'authenticate'])->name('admin.login');
    Route::post('admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
});

// Route::get('/test-email', function () {
//     Mail::raw('This is a test email.', function ($message) {
//         $message->to('your_email@example.com') // Replace with your email
//                 ->subject('Test Email');
//     });

//     return 'Email sent!';
// });


// Announcement
/*Route::get('announcemen'announcement't');*/

// Student
Route::get('/student/home', [PageController::class, 'student_page'])
    ->middleware('student.guard')
    ->name('student.home');

// routes/web.php
Route::get('/2fa', [TwoFactorController::class, 'index'])->name('2fa.index');
Route::post('/2fa', [TwoFactorController::class, 'store'])->name('2fa.store');

Route::prefix('admin')->middleware(['admin.guard', '2fa'])->group(function () {
    Route::get('account', [AdminController::class, 'account'])->name('admin.account');
    Route::put('account/email-update', [AdminController::class, 'update_email'])->name('admin.email.update');
    // Route::put('account/password-update', [AdminController::class, 'update_email'])->name('admin.email.update');
    // admin/student-specific routes go here
    Route::prefix('student')->group(function () {
        Route::get('list', [StudentController::class, 'index'])->name('student.index');
        Route::get('create', [StudentController::class, 'create'])->name('student.create');
        Route::post('store', [StudentController::class, 'store'])->name('student.store');
        Route::get('edit/{id}', [StudentController::class, 'edit'])->name('student.edit');
        Route::put('update/{id}', [StudentController::class, 'update'])->name('student.update');
        Route::delete('destroy/{id}', [StudentController::class, 'destroy'])->name('student.destroy');
    });

    // admin/section-specific routes go here
    Route::prefix('section')->group(function () {
        Route::get('list', [SectionController::class, 'index'])->name('section.index');
        Route::get('create', [SectionController::class, 'create'])->name('section.create');
        Route::post('store', [SectionController::class, 'store'])->name('section.store');
        Route::get('edit/{id}', [SectionController::class, 'edit'])->name('section.edit');
        Route::put('update/{id}', [SectionController::class, 'update'])->name('section.update');
        Route::delete('destroy/{id}', [SectionController::class, 'destroy'])->name('section.destroy');
    });
    // admin/subject-specific routes go here
    Route::prefix('subject')->group(function () {
        Route::get('create', [SubjectController::class, 'create'])->name('subject.create');
        Route::post('store', [SubjectController::class, 'store'])->name('subject.store');
        Route::get('edit/{id}', [SubjectController::class, 'edit'])->name('subject.edit');
        Route::get('show/{id}', [SectionSubjectController::class, 'show'])->name('subject.show');
        Route::put('update/{id}', [SubjectController::class, 'update'])->name('subject.update');
        Route::delete('destroy/{id}', [SubjectController::class, 'destroy'])->name('subject.destroy');
        // assigned_subjects
        Route::get('assigned_subjects/${section_id}', [SubjectController::class, 'assigned_subjects'])->name('get.assigned_subjects');
    });

    Route::prefix('section-subject')->group(function () {
        Route::get('list', [SectionSubjectController::class, 'index'])->name('section-subject.index');
        Route::get('create', [SectionSubjectController::class, 'create'])->name('section-subject.create');
        Route::post('store', [SectionSubjectController::class, 'store'])->name('section-subject.store');
        Route::get('edit/{section_id}-{subject_id}', [SectionSubjectController::class, 'edit'])->name('section-subject.edit');
        Route::put('update/{section_id}-{subject_id}', [SectionSubjectController::class, 'update'])->name('section-subject.update');
        Route::delete('destroy/{section_id}-{subject_id}', [SectionSubjectController::class, 'destroy'])->name('section-subject.destroy');
    });

    Route::prefix('grade')->group(function () {
        Route::get('create/{id}', [GradeController::class, 'create'])->name('grade.create');
        Route::get('show/{id}', [GradeController::class, 'show'])->name('grade.show');
        Route::post('store', [GradeController::class, 'store'])->name('grade.store');
    });

    Route::prefix('schedule')->group(function () {
        Route::post('store', [ScheduleController::class, 'store'])->name('schedule.store');
    });

    Route::prefix('announcement')->group(function () {
        Route::get('index', [AnnouncementController::class, 'index'])->name('announcement.index');
        Route::get('create', [AnnouncementController::class, 'create'])->name('announcement.create');
        Route::post('store', [AnnouncementController::class, 'store'])->name('announcement.store');
        Route::get('show/{id}', [AnnouncementController::class, 'show'])->name('announcement.show');
        Route::post('delete/{id}', [AnnouncementController::class, 'destroy'])->name('announcement.delete');
        Route::get('edit/{id}', [AnnouncementController::class, 'edit'])->name('announcement.edit');
        Route::post('update/{id}', [AnnouncementController::class, 'update'])->name('announcement.update');
    });


    Route::prefix('events')->group(function () {
        Route::get('index', [EventController::class,  'index'])->name('events.index');
        Route::get('create', [EventController::class,  'create'])->name('events.create');
        Route::post('store', [EventController::class,  'store'])->name('events.store');
        Route::delete('destroy/{id}', [EventController::class,  'destroy'])->name('events.destroy');
    });
});
