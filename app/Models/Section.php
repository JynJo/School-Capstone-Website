<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = ['name', 'teacher_id'];


    public function students() {
        return $this->hasMany(Student::class, 'section_id');
    }
    public function subjects() {
        return $this->belongsToMany(Subject::class, 'section_subject');
    }
    public function teacher() {
        return $this->belongsTo(Teacher::class);
    }
    public function schedule() {
        return $this->hasOne(Schedule::class);
    }

}
