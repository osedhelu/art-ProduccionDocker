<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('contenido/contenido');
})->name('main');

Route::get('/person', 'PersonController@index');
Route::post('/person/add', 'PersonController@store');
Route::put('/person/update', 'PersonController@update');
Route::put('/person/active', 'PersonController@activer');
Route::put('/person/deactive', 'PersonController@desactivar');

// Route::get('/ 'Auth\LoginController@showLoginForm');
Route::post('/login', 'Auth\LoginController@login')->name('login');
Route::get('/home', 'HomeController@index')->name('home');
