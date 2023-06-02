<?php

namespace App\Services;

use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Http;

class BuyIntentionService
{
  public function getIntention($id)
  {
    try {

      $intention_url = env('BUY_INTENTION_URL');
      $response = Http::get("$intention_url/intention/$id");
      return $response;
    } catch (RequestException $e) {

      return response()->json([
        'success' => false,
        'message' => 'Error connecting to the API'
      ], 500);
    }
  }

  public function getIntentions()
  {
    try {

      $intention_url = env('BUY_INTENTION_URL');
      $response = Http::get("$intention_url/intention");
      return $response;
    } catch (RequestException $e) {

      return response()->json([
        'success' => false,
        'message' => 'Error connecting to the API'
      ], 500);
    }
  }
  public function sendBuyIntention($data)
  {
    try {

      $intention_url = env('BUY_INTENTION_URL');
      $response = Http::post("$intention_url/intention",$data);
      return $response;
      return response()->json([
        'success' => true,
        'message' => 'Buy intention created successfully',
        "data" => $response
      ]);
    } catch (RequestException $e) {

      return response()->json([
        'success' => false,
        'message' => 'Error connecting to the API'
      ], 500);
    }
  }
}
