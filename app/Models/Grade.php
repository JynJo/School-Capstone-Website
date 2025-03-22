<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = [
        'student_id',
        'subject_id',
        'term',
        'semester',
        'average'
    ];

    protected $casts = [
    ];

    public function student() {
        return $this->belongsTo(Student::class, 'student_id');
    }

    public function subject() {
        return $this->belongsTo(Subject::class, 'subject_id');
    }
}
