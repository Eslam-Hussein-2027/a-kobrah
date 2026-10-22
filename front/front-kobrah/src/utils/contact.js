// A phone number is "dialable" when it only holds digits, spaces and dashes (not a "+218 XX ..." placeholder).
export function telHref(phone) {
  return /^\+?[\d\s-]+$/.test(phone ?? '') ? `tel:${phone.replace(/[\s-]/g, '')}` : null
}

export function mailHref(email) {
  return email ? `mailto:${email}` : null
}

export function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query ?? '')}`
}
