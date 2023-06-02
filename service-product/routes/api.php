<?php

use App\Http\Controllers\IntentionController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/product/{id}',[ProductController::class, 'getProduct']);
Route::get('/product',[ProductController::class, 'getProducts']);

Route::get('/intention/{id}',[IntentionController::class, 'getIntention']);
Route::get('/intention',[IntentionController::class, 'getIntentions']);
Route::post('/intention',[IntentionController::class, 'storeBuyIntention']);
