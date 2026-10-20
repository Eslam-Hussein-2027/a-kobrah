// Fallback copy of GET /api/forms (source of truth: back/backend/database/seeders/DownloadableFormSeeder.php).
export const FORM_CATEGORIES = {
  claims: 'المطالبات',
  apply: 'طلبات التأمين',
  general: 'نماذج عامة',
}

export const FORMS = [
  {
    id: 1,
    category: 'claims',
    title: 'نموذج إخطار بحادث سيارة',
    description: 'يُعبّأ عند وقوع حادث للإبلاغ عنه وبدء إجراءات التعويض.',
  },
  {
    id: 2,
    category: 'claims',
    title: 'نموذج مطالبة تعويض صحي',
    description: 'لطلب استرداد مصاريف العلاج المشمولة بالتغطية.',
  },
  {
    id: 3,
    category: 'claims',
    title: 'نموذج مطالبة تأمين ممتلكات',
    description: 'للإبلاغ عن أضرار الحريق أو السرقة أو غيرها.',
  },
  { id: 4, category: 'apply', title: 'طلب تأمين سيارة', description: 'لإصدار وثيقة تأمين إجباري أو شامل لسيارتك.' },
  { id: 5, category: 'apply', title: 'طلب تأمين سفر', description: 'لإصدار وثيقة تأمين سفر قبل رحلتك.' },
  { id: 6, category: 'apply', title: 'طلب تأمين بحري (بضائع)', description: 'لتأمين الشحنات المستوردة أو المصدّرة.' },
  { id: 7, category: 'apply', title: 'طلب تأمين حريق وممتلكات', description: 'لتأمين المباني والمنشآت ومحتوياتها.' },
  { id: 8, category: 'apply', title: 'طلب تأمين طبي جماعي', description: 'للشركات الراغبة في تأمين موظفيها صحيًا.' },
  {
    id: 9,
    category: 'general',
    title: 'نموذج تحديث بيانات العميل',
    description: 'لتحديث بيانات الاتصال والمعلومات الشخصية.',
  },
  {
    id: 10,
    category: 'general',
    title: 'نموذج شكوى أو اقتراح',
    description: 'شاركنا ملاحظاتك لنطوّر خدماتنا باستمرار.',
  },
].map((form) => ({ ...form, category_label: FORM_CATEGORIES[form.category], download_url: null }))
