<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Authenticatable
{
    use HasFactory;
    protected $guard = "student";
    
     protected $fillable = [
        'email',
        'name',
        'password',
        'blood_type',
        'address',
        'section_id',
        'id_number',
        'user_id',
        'gender',
        'birthday',
        'parent_no'
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $casts = [
        'id_number' => 'encrypted',
        'blood_type' => 'encrypted',
        'address' => 'encrypted',
        'parent_no' => 'encrypted',
        'birthday' => 'encrypted',
        'gender' => 'encrypted',
        'password' => 'hashed'
    ];

    public function grades() {
        return $this->hasMany(Grade::class, 'student_id');
    }

    public function section() {
        return $this->belongsTo(Section::class, 'section_id');
    }


}
