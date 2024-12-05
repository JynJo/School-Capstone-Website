<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $fillable = ['subject_id', 'section_id', 'day_id', 'start_time', 'end_time'];

    public function days() {
        return $this->belongsTo(Day::class, 'day_id');
    }
    public function sections() {
        return $this->belongsTo(Section::class, 'section_id');
    }
    public function subjects() {
        return $this->belongsTo(Subject::class, 'subject_id');
    }


}
