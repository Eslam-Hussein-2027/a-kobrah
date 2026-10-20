// Fallback copy of GET /api/site — shown until the API responds (or if it is unreachable).
// The source of truth is back/backend/config/site.php (.env SITE_* values).
export const SITE = {
  name: 'العربية الكبرى للتأمين المساهمة',
  name_en: 'The Great Arabia Insurance Company',
  phone: '+218 XX XXX XXXX',
  email: 'info@a-kobrah.ly',
  address: 'المقر الرئيسي، ليبيا',
  hours: 'الأحد – الخميس | 8:00 ص – 3:00 م',
  map_query: 'العربية الكبرى للتأمين ليبيا',
  social: { facebook: null, instagram: null, linkedin: null },
  stats: [
    { value: 15, prefix: '+', label: 'عامًا من الخبرة' },
    { value: 25000, prefix: '+', label: 'عميل يثق بنا' },
    { value: 30, prefix: '+', label: 'فرع ووكيل معتمد' },
    { value: 14, prefix: '', label: 'منتجًا تأمينيًا' },
  ],
}
