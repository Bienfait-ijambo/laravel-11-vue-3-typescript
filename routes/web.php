<?php

use App\Events\testingEvent;
use Illuminate\Support\Facades\Route;

Route::get('/', function() {
   testingEvent::dispatch("hello world");
    return view('welcome');
});
