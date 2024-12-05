<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = [
        'name',
    ];

    public function section() {
        return $this->belongsToMany(Section::class, 'section_subject', 'subject_id', 'section_id');
    }

    public function grades() {
        return $this->hasMany(Grade::class);
    }

}
