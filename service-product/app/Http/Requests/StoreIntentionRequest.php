<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreIntentionRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
   */
  public function rules(): array
  {
    return [
      'name' => 'string|required|min:3|max:100',
      'address' => 'array|required|max:100',
      'address.street' => 'string|required|max:100',
      'address.number' => 'string|required|max:100',
      'address.postcode' => 'string|required|max:100',
      'address.complement' => 'string|nullable|max:100',
      'intentionProduct' => 'array|required',
      'intentionProduct.*.productId' => 'numeric|required',
      'intentionProduct.*.title' => 'string|required|max:50',
      'intentionProduct.*.price' => 'numeric|required',
      'intentionProduct.*.category' => 'string|required|max:50',
      'intentionProduct.*.description' => 'string|required|max:255',
      'intentionProduct.*.image' => 'string|required',
    ];
  }
  public function messages()
  {
    return [

      'address.street.required' => 'O campo rua é obrigatório.',
      'address.number.required' => 'O campo número é obrigatório.',
      'address.postcode.required' => 'O campo CEP é obrigatório.',
      'products.required' => 'O campo produtos é obrigatório.',
      'products.*.id.required' => 'O campo ID do produto é obrigatório.',
      'products.*.title.required' => 'O campo título do produto é obrigatório.',
      'products.*.price.required' => 'O campo preço do produto é obrigatório.',
      'products.*.category.required' => 'O campo categoria do produto é obrigatório.',
      'products.*.description.required' => 'O campo descrição do produto é obrigatório.',
      'products.*.image.required' => 'O campo imagem do produto é obrigatório.',
    ];
  }
}
