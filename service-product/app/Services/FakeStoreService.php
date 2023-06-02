<?php

namespace App\Services;

use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Http;

class FakeStoreService
{
  public function getProducts()
  {
    try {

      $response = Http::get('https://fakestoreapi.com/products');
      $response = $response->json();

      return response()->json([
        'success' => true,
        'data' => $response
      ]);
    } catch (RequestException $e) {
      return response()->json([
        'success' => false,
        'message' => 'Error connecting to the API'
      ], 500);
    }
  }


  public function getProduct($id)
  {
    try {

      $response = Http::get('https://fakestoreapi.com/products/' . $id);
      $response = $response->json();

      if ($response === null){
        return response()->json([
          'success' => false,
          'menssage' => 'no data for this id or ID is not valid'
        ]);
      }

      return response()->json([
        'success' => true,
        'data' => $response
      ]);

    } catch (RequestException $e) {

      return response()->json([
        'success' => false,
        'message' => 'Error connecting to the API'
      ], 500);
    }
  }

}
