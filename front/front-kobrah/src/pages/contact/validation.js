// Client-side rules for the contact form — mirror StoreContactMessageRequest on the backend.
const RULES = {
  name: { test: (v) => v.trim().length >= 3, message: 'يرجى إدخال الاسم الكامل' },
  phone: { test: (v) => /^\+?[\d\s-]{9,16}$/.test(v.trim()), message: 'يرجى إدخال رقم هاتف صحيح' },
  email: {
    test: (v) => !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    message: 'صيغة البريد الإلكتروني غير صحيحة',
  },
  insurance_type: { test: (v) => Boolean(v), message: 'يرجى اختيار نوع التأمين' },
  message: { test: (v) => v.trim().length >= 10, message: 'يرجى كتابة رسالة لا تقل عن 10 أحرف' },
}

export const FIELDS = Object.keys(RULES)

/** Returns the error message for a field, or null when the value is valid. */
export function validateField(name, value) {
  return RULES[name].test(value ?? '') ? null : RULES[name].message
}

/** Returns `{ field: message }` for every invalid field. */
export function validateAll(values) {
  return Object.fromEntries(
    FIELDS.map((name) => [name, validateField(name, values[name])]).filter(([, error]) => error),
  )
}
