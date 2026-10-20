<!doctype html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <title>رسالة جديدة من الموقع</title>
</head>
<body style="margin:0;padding:24px;background:#F5F8FD;font-family:Tahoma,Arial,sans-serif;color:#12163A;">
    <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;border:1px solid #E4E9F3;padding:24px;">
        <tr><td>
            <h2 style="margin:0 0 16px;color:#1A1C95;">رسالة جديدة من نموذج التواصل</h2>
            <p style="margin:0 0 8px;"><strong>الاسم:</strong> {{ $contactMessage->name }}</p>
            <p style="margin:0 0 8px;"><strong>الهاتف:</strong> <span dir="ltr">{{ $contactMessage->phone }}</span></p>
            @if ($contactMessage->email)
                <p style="margin:0 0 8px;"><strong>البريد الإلكتروني:</strong> {{ $contactMessage->email }}</p>
            @endif
            <p style="margin:0 0 8px;"><strong>نوع التأمين:</strong> {{ $contactMessage->insurance_type }}</p>
            <p style="margin:16px 0 4px;"><strong>الرسالة:</strong></p>
            <p style="margin:0;white-space:pre-line;line-height:1.8;">{{ $contactMessage->message }}</p>
            <p style="margin:24px 0 0;font-size:12px;color:#6B7394;">أُرسلت بتاريخ {{ $contactMessage->created_at->format('Y-m-d H:i') }}</p>
        </td></tr>
    </table>
</body>
</html>
