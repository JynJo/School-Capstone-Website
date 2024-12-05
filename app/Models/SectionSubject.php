<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SectionSubject extends Model
{
    protected $table = "section_subject";
    protected $fillable = ['section_id', 'subject_id'];
}
