export const BRAND = 'العربية الكبرى للتأمين المساهمة'
export const BRAND_EN = 'The Great Arabia Insurance Company'

export const ROUTES = {
  home: '/',
  about: '/about',
  personal: '/personal',
  business: '/business',
  forms: '/forms',
  contact: '/contact',
}

// Main navigation (header, mobile drawer, footer quick links).
export const NAV_LINKS = [
  { to: ROUTES.home, label: 'الرئيسية', icon: 'home' },
  { to: ROUTES.about, label: 'من نحن', icon: 'info' },
  { to: ROUTES.personal, label: 'تأمين الأفراد', icon: 'user' },
  { to: ROUTES.business, label: 'تأمين الشركات', icon: 'briefcase' },
  { to: ROUTES.forms, label: 'النماذج', icon: 'file' },
  { to: ROUTES.contact, label: 'اتصل بنا', icon: 'phone' },
]

export function pageTitle(pathname) {
  const link = NAV_LINKS.find((item) => item.to === pathname)
  return !link || link.to === ROUTES.home ? BRAND : `${link.label} | ${BRAND}`
}
