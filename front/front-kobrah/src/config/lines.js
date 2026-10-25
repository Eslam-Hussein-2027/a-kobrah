import { ROUTES } from './routes'

// The site's "network": each audience is a line, services form the trunk they share.
export const LINES = {
  personal: { id: 'personal', number: '1', name: 'خط الأفراد', short: 'الأفراد', route: ROUTES.personal },
  business: { id: 'business', number: '2', name: 'خط الشركات', short: 'الشركات', route: ROUTES.business },
  services: { id: 'services', number: '3', name: 'خط الخدمات', short: 'الخدمات', route: ROUTES.contact },
}

// Which line a page belongs to (colours its route header and the "you are here" station).
export const PAGE_LINE = {
  [ROUTES.home]: 'services',
  [ROUTES.about]: 'services',
  [ROUTES.personal]: 'personal',
  [ROUTES.business]: 'business',
  [ROUTES.forms]: 'services',
  [ROUTES.contact]: 'services',
}
