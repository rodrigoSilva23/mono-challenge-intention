<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreIntentionRequest;
use App\Services\BuyIntentionService;
use Illuminate\Http\Request;

class IntentionController extends Controller
{
    protected $buyIntentionService;

    public function __construct(BuyIntentionService $buyIntentionService)
    {
        $this->buyIntentionService = $buyIntentionService;
    }
    public function getIntention($id)
    {
        $response = $this->buyIntentionService->getIntention($id);
        return $response;
    }
    public function getIntentions()
    {
        $response = $this->buyIntentionService->getIntentions();
        return $response;
    }
    public function storeBuyIntention(StoreIntentionRequest $request)
    {
        $input = $request->validated();
        $response = $this->buyIntentionService->sendBuyIntention($input);
        return $response;
    }
}
