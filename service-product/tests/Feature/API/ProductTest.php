<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function testGetProduct(): void
    {
        $response = $this->get('api/product/10');
        $response->assertStatus(200);
        $response->assertJsonStructure([
          'success',
          'data'=>[
            "id",
            "title",
            "price",
            "description",
            "category",
            "image",
          ]
      ]);
    }

    public function testGetProducts(): void
    {
        $response = $this->get('api/product');
        $response->assertStatus(200);

        $response->assertJsonStructure([
          'success',
          'data'=>[
            '*' => [
              'id',
              'title',
              'price',
              'description',
              'category',
              'image',
          ],
          ]
      ]);
    }
}
