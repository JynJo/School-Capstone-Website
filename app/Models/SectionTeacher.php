<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SectionTeacher extends Model
{
    protected $table = 'section_teacher';
    protected $fillable = [
        'teacher_id',
        'section_id',
    ];

}
