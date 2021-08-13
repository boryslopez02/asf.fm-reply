<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::post('/login', function() {
    $user = request()->only('user','password');
    if (Auth::attempt($user)) {
        request()->session()->regenerate();
        return redirect('home');
    } 
    return 'Login Fail';
})->middleware('guest');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
