<?php
Route::get('/', function (){
    return view('frontend');
});
Route::get('/admin', function (){
    return view('admin');
})->name('admin');
Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
