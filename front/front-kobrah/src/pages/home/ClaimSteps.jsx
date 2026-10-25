import Button from '../../components/ui/Button'
import SectionTitle from '../../components/ui/SectionTitle'
import { ROUTES } from '../../config/routes'
import './ClaimSteps.css'

const STEPS = [
  { title: 'الإبلاغ عن الحادث', text: 'تواصل معنا فور وقوع الحادث عبر الهاتف أو بزيارة أقرب فرع.' },
  { title: 'تقديم المستندات', text: 'عبّئ نموذج المطالبة وأرفق المستندات المطلوبة.' },
  { title: 'المعاينة والتقييم', text: 'يقوم خبراؤنا بمعاينة الأضرار وتقدير قيمة التعويض.' },
  { title: 'صرف التعويض', text: 'يتم صرف التعويض المستحق بسرعة وشفافية.' },
]

export default function ClaimSteps() {
  return (
    <section className="section section-tint" aria-labelledby="claims-title">
      <div className="container">
        <SectionTitle
          id="claims-title"
          title="خطوات بسيطة للحصول على تعويضك"
          lede="صمّمنا رحلة المطالبة لتكون سهلة وواضحة من أول اتصال حتى صرف التعويض."
        />
        <ol className="claim-route">
          {STEPS.map((step, index) => (
            <li className="claim-stop" key={step.title}>
              <span className="claim-num" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <Button to={ROUTES.forms} variant="ghost" iconStart="download">
          تحميل نماذج المطالبات
        </Button>
      </div>
    </section>
  )
}
