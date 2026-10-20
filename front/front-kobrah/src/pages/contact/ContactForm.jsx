import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import { MESSAGES } from '../../config/messages'
import { useContent } from '../../context/content'
import { useToast } from '../../context/toast'
import { PRODUCT_TYPE_LABELS } from '../../data/products'
import { api } from '../../services/api'
import { FIELDS, validateAll, validateField } from './validation'

const EMPTY = { name: '', phone: '', email: '', insurance_type: '', message: '' }
const GENERAL_INQUIRY = 'استفسار عام'

function Field({ name, label, required, error, full, children }) {
  return (
    <div className={['field', full && 'full', error && 'has-error'].filter(Boolean).join(' ')}>
      <label htmlFor={`f-${name}`}>
        {label} {required && <span>*</span>}
      </label>
      {children}
      <small className="err" id={`f-${name}-err`}>
        {error}
      </small>
    </div>
  )
}

export default function ContactForm() {
  const { products } = useContent()
  const toast = useToast()
  const location = useLocation()
  const preselected = location.state?.insuranceType ?? ''

  const [values, setValues] = useState({ ...EMPTY, insurance_type: preselected })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  // Coming from "اطلب هذه التغطية": the type is pre-selected, so jump straight to the name field.
  useEffect(() => {
    if (!preselected) return
    const timer = setTimeout(() => document.getElementById('f-name')?.focus({ preventScroll: true }), 500)
    return () => clearTimeout(timer)
  }, [preselected])

  const setFieldError = (name, error) => setErrors((prev) => ({ ...prev, [name]: error }))

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setFieldError(name, validateField(name, value))
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    if (value) setFieldError(name, validateField(name, value))
  }

  const focusFirstError = (form, fieldErrors) => {
    const first = FIELDS.find((name) => fieldErrors[name])
    if (first) form.elements[first]?.focus()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    const clientErrors = validateAll(values)
    setErrors(clientErrors)
    if (Object.keys(clientErrors).length) {
      focusFirstError(form, clientErrors)
      toast(MESSAGES.checkFields, 'error')
      return
    }

    setSending(true)
    try {
      const response = await api.sendContactMessage(values)
      setValues(EMPTY)
      setErrors({})
      toast(response?.message || MESSAGES.messageSent, 'success')
    } catch (error) {
      if (error.status === 422) {
        const serverErrors = Object.fromEntries(Object.entries(error.errors).map(([name, list]) => [name, list[0]]))
        setErrors(serverErrors)
        focusFirstError(form, serverErrors)
        toast(MESSAGES.checkFields, 'error')
      } else {
        toast(error.message, 'error')
      }
    } finally {
      setSending(false)
    }
  }

  const inputProps = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `f-${name}-err` : undefined,
  })

  return (
    <Reveal as="form" className="form-card" type="left" noValidate onSubmit={handleSubmit}>
      <h2>أرسل لنا رسالة</h2>
      <p>املأ النموذج وسيتواصل معك أحد مستشارينا في أقرب وقت.</p>

      <div className="form-grid">
        <Field name="name" label="الاسم الكامل" required error={errors.name}>
          <input {...inputProps('name')} autoComplete="name" placeholder="اكتب اسمك الكامل" />
        </Field>

        <Field name="phone" label="رقم الهاتف" required error={errors.phone}>
          <input {...inputProps('phone')} type="tel" dir="ltr" autoComplete="tel" placeholder="+218 9X XXX XXXX" />
        </Field>

        <Field name="email" label="البريد الإلكتروني" error={errors.email}>
          <input {...inputProps('email')} type="email" dir="ltr" autoComplete="email" placeholder="name@example.com" />
        </Field>

        <Field name="insurance_type" label="نوع التأمين" required error={errors.insurance_type}>
          <select {...inputProps('insurance_type')}>
            <option value="">اختر نوع التأمين</option>
            {Object.entries(PRODUCT_TYPE_LABELS).map(([type, label]) => (
              <optgroup key={type} label={label}>
                {products[type].map((product) => (
                  <option key={product.slug}>{product.title}</option>
                ))}
              </optgroup>
            ))}
            <option>{GENERAL_INQUIRY}</option>
          </select>
        </Field>

        <Field name="message" label="رسالتك" required full error={errors.message}>
          <textarea {...inputProps('message')} placeholder="كيف يمكننا مساعدتك؟" />
        </Field>

        <div className="form-submit">
          <small>الحقول المشار إليها بـ * مطلوبة</small>
          <Button type="submit" icon="send" loading={sending} disabled={sending}>
            إرسال الرسالة
          </Button>
        </div>
      </div>
    </Reveal>
  )
}
