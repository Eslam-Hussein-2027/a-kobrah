<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactMessageRequest extends FormRequest
{
    /**
     * The contact form is public.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, string>>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:120'],
            'phone' => ['required', 'string', 'regex:/^\+?[\d\s-]{9,16}$/'],
            'email' => ['nullable', 'email', 'max:190'],
            'insurance_type' => ['required', 'string', 'max:150'],
            'message' => ['required', 'string', 'min:10', 'max:5000'],
        ];
    }

    /**
     * Arabic error messages, matching the ones shown by the front end.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name' => 'يرجى إدخال الاسم الكامل',
            'phone' => 'يرجى إدخال رقم هاتف صحيح',
            'email' => 'صيغة البريد الإلكتروني غير صحيحة',
            'insurance_type' => 'يرجى اختيار نوع التأمين',
            'message' => 'يرجى كتابة رسالة لا تقل عن 10 أحرف',
        ];
    }
}
