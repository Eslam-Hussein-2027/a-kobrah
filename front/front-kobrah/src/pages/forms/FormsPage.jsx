import { useState } from 'react'
import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import PageHero from '../../components/ui/PageHero'
import Reveal from '../../components/ui/Reveal'
import { ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import FormItem from './FormItem'
import './FormsPage.css'

const ALL = 'all'

export default function FormsPage() {
  const { forms, formCategories } = useContent()
  const [category, setCategory] = useState(ALL)
  const [query, setQuery] = useState('')

  const chips = [
    { key: ALL, label: 'الكل', count: forms.length },
    ...Object.entries(formCategories).map(([key, label]) => ({
      key,
      label,
      count: forms.filter((form) => form.category === key).length,
    })),
  ]

  const term = query.trim()
  const matches = (form) =>
    (category === ALL || form.category === category) &&
    (!term || `${form.category_label} ${form.title} ${form.description}`.includes(term))
  const visibleCount = forms.filter(matches).length

  return (
    <>
      <PageHero title="النماذج" description="حمّل نماذج طلبات التأمين والمطالبات بسهولة، واملأها وسلّمها لأقرب فرع." />
      <section className="section">
        <div className="container">
          <Reveal className="forms-toolbar">
            <label className="search">
              <Icon name="search" />
              <input
                type="search"
                placeholder="ابحث عن نموذج..."
                aria-label="ابحث عن نموذج"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <div className="chips" role="group" aria-label="تصنيف النماذج">
              {chips.map((chip) => (
                <button
                  key={chip.key}
                  type="button"
                  className={category === chip.key ? 'chip is-active' : 'chip'}
                  aria-pressed={category === chip.key}
                  onClick={() => setCategory(chip.key)}
                >
                  {chip.label}
                  <b>{chip.count}</b>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Items stay mounted (just hidden) so filtering doesn't replay their entrance animation. */}
          <div className="forms-grid">
            {forms.map((form, index) => (
              <FormItem key={form.id} form={form} delay={(index % 2) * 90} hidden={!matches(form)} />
            ))}
          </div>

          {visibleCount === 0 && (
            <div className="empty">
              <Icon name="search" />
              <strong>لا توجد نماذج مطابقة لبحثك</strong>
              <span>جرّب كلمة أخرى أو اختر تصنيفًا مختلفًا.</span>
            </div>
          )}

          <Reveal className="help-box">
            <span className="chip-ico">
              <Icon name="headset" />
            </span>
            <div>
              <h3>هل تحتاج مساعدة في تعبئة النماذج؟</h3>
              <p>فريق خدمة العملاء جاهز لمساعدتك في اختيار النموذج الصحيح وتعبئته.</p>
            </div>
            <Button to={ROUTES.contact} icon="arrow">
              تواصل معنا
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
