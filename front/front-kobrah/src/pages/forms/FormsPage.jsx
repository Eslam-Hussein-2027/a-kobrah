import { useState } from 'react'
import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import RouteHeader from '../../components/ui/RouteHeader'
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
      <RouteHeader
        path={ROUTES.forms}
        title="النماذج"
        description="حمّل نماذج طلبات التأمين والمطالبات بسهولة، واملأها وسلّمها لأقرب فرع."
      />
      <section className="section" aria-label="مكتبة النماذج">
        <div className="container">
          <div className="board-toolbar">
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
          </div>

          <ul className="board">
            {forms.map((form) => (
              <FormItem key={form.id} form={form} hidden={!matches(form)} />
            ))}
          </ul>

          {visibleCount === 0 && (
            <div className="empty" role="status">
              <Icon name="search" />
              <strong>لا توجد نماذج مطابقة لبحثك</strong>
              <span>جرّب كلمة أخرى أو اختر تصنيفًا مختلفًا.</span>
            </div>
          )}

          <div className="help-row">
            <Icon name="headset" />
            <div>
              <h2>هل تحتاج مساعدة في تعبئة النماذج؟</h2>
              <p>فريق خدمة العملاء جاهز لمساعدتك في اختيار النموذج الصحيح وتعبئته.</p>
            </div>
            <Button to={ROUTES.contact} variant="ghost" icon="arrow">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
