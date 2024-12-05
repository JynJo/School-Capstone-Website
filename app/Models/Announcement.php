<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Stevebauman\Purify\Casts\PurifyHtmlOnGet;
class Announcement extends Model
{
    protected $fillable = ['title', 'content', 'image', 'notice_for'];

    protected $cast = [
      "content" => PurifyHtmlOnGet::class,
    ];
}
