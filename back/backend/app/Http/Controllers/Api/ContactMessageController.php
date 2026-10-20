<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactMessageRequest;
use App\Mail\ContactMessageReceived;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Throwable;

class ContactMessageController extends Controller
{
    /**
     * Store a message sent from the contact form and notify the company inbox.
     */
    public function store(StoreContactMessageRequest $request): JsonResponse
    {
        $message = ContactMessage::create([
            ...$request->validated(),
            'ip_address' => $request->ip(),
        ]);

        if ($recipient = config('site.contact_recipient')) {
            try {
                Mail::to($recipient)->send(new ContactMessageReceived($message));
            } catch (Throwable $e) {
                // The message is already saved; a mail outage must not fail the visitor's request.
                report($e);
            }
        }

        return response()->json([
            'message' => 'تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا',
            'data' => ['id' => $message->id],
        ], 201);
    }
}
