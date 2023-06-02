<?php

namespace App\Http\Controllers;

use Exception;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Services\FakeStoreService;


class ProductController extends Controller
{
    protected $fakeStoreService;

    public function __construct(FakeStoreService $fakeStoreService)
    {
        $this->fakeStoreService = $fakeStoreService;
    }

    public function getProducts()
    {
        $products = $this->fakeStoreService->getProducts();
        return $products;
    }

    public function getProduct($id)
    {
        $product = $this->fakeStoreService->getProduct($id);
        return $product;
    }

}
