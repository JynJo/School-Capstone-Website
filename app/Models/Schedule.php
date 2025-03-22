<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $fillable = ['image', 'section_id' ];

    public function section() {
        return $this->belongsTo(Section::class, 'section_id');
    }


}
