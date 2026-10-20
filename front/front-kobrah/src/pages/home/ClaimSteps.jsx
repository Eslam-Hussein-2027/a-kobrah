import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import Reveal from '../../components/ui/Reveal'
import SectionHead from '../../components/ui/SectionHead'
import { ROUTES } from '../../config/routes'
import './ClaimSteps.css'

const STEPS = [
  { icon: 'phone', title: 'الإبلاغ عن الحادث', text: 'تواصل معنا فور وقوع الحادث عبر الهاتف أو بزيارة أقرب فرع.' },
  { icon: 'file', title: 'تقديم المستندات', text: 'عبّئ نموذج المطالبة وأرفق المستندات المطلوبة.' },
  { icon: 'clipboard', title: 'المعاينة والتقييم', text: 'يقوم خبراؤنا بمعاينة الأضرار وتقدير قيمة التعويض.' },
  { icon: 'wallet', title: 'صرف التعويض', text: 'يتم صرف التعويض المستحق بسرعة وشفافية.' },
]

export default function ClaimSteps() {
  return (
    <section className="section section-white">
      <div className="container">
        <SectionHead
          kicker="المطالبات"
          title="خطوات بسيطة"
          highlight="للحصول على تعويضك"
          lead="صمّمنا رحلة المطالبة لتكون سهلة وواضحة من أول اتصال حتى صرف التعويض."
        />
        <div className="steps">
          <Reveal as="span" className="steps-line" type="line" aria-hidden="true" />
          {STEPS.map((step, index) => (
            <Reveal className="step" delay={index * 150} key={step.title}>
              <div className="step-num">
                <Icon name={step.icon} />
                <b>{index + 1}</b>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="center mt-40">
          <Button to={ROUTES.forms} variant="ghost" iconStart="download">
            تحميل نماذج المطالبات
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
