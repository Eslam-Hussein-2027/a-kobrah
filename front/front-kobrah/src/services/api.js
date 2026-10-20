// Thin wrapper around fetch for the Laravel API (back/backend/routes/api.php).
const API_BASE = `${(import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')}/api`

export class ApiError extends Error {
  constructor(message, status, errors = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.errors = errors
  }
}

const ERROR_MESSAGES = {
  network: 'تعذّر الاتصال بالخادم، يرجى المحاولة لاحقًا',
  tooMany: 'لقد أرسلت عدة طلبات متتالية، يرجى المحاولة بعد دقيقة',
  generic: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقًا',
}

async function request(path, { method = 'GET', body, signal } = {}) {
  let response
  try {
    response = await fetch(`${API_BASE}${path}`, {
      method,
      signal,
      headers: {
        Accept: 'application/json',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    })
  } catch (error) {
    if (error.name === 'AbortError') throw error
    throw new ApiError(ERROR_MESSAGES.network, 0)
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    if (response.status === 429) throw new ApiError(ERROR_MESSAGES.tooMany, 429)
    if (response.status === 422) throw new ApiError(data?.message, 422, data?.errors ?? {})
    throw new ApiError(ERROR_MESSAGES.generic, response.status)
  }

  return data
}

export const api = {
  getSite: (options) => request('/site', options),
  getProducts: (options) => request('/products', options),
  getSectors: (options) => request('/sectors', options),
  getForms: (options) => request('/forms', options),
  sendContactMessage: (payload) => request('/contact', { method: 'POST', body: payload }),
}
