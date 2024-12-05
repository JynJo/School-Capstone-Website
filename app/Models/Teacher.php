<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\User;
class Teacher extends Authenticatable
{
    use HasFactory;
    protected $guard = "teacher";
    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'gender',
        'phone_number',
        'birthday',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    // public function subjects() {
    //     return $this->belongsToMany(Subject::class, 'subject_teacher', 'teacher_id', 'subject_id');
    // }

    /*public function subjects() {*/
    /*    return $this->belongsToMany(Subject::class, 'subject_teacher', 'teacher_id', 'subject_id');*/
    /*}*/

    public function section() {
        return $this->hasOne(Section::class);
    }

}
