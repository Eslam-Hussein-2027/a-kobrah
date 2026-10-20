import Icon from '../../components/ui/Icon'
import Reveal from '../../components/ui/Reveal'
import SectionHead from '../../components/ui/SectionHead'
import './WhyUs.css'

const FEATURES = [
  {
    icon: 'zap',
    title: 'سرعة في صرف التعويضات',
    text: 'إجراءات مبسّطة ومعاينة سريعة تضمن حصولك على تعويضك في أقصر وقت ممكن.',
  },
  { icon: 'percent', title: 'أسعار تنافسية', text: 'أقساط مدروسة تناسب احتياجاتك وميزانيتك دون المساس بجودة التغطية.' },
  { icon: 'shield', title: 'تغطية شاملة', text: 'منتجات تأمينية متنوعة تغطي الأفراد والشركات في مختلف القطاعات.' },
  { icon: 'headset', title: 'خدمة عملاء متميزة', text: 'فريق جاهز للرد على استفساراتك ومرافقتك في كل خطوة.' },
  { icon: 'eye', title: 'شفافية ووضوح', text: 'شروط واضحة ووثائق مفهومة، بلا تفاصيل مخفية أو مفاجآت.' },
  { icon: 'award', title: 'خبرة واحترافية', text: 'كوادر مؤهلة تمتلك خبرة واسعة في مجالات التأمين وإدارة المخاطر.' },
]

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          kicker="لماذا نحن"
          title="لماذا تختار"
          highlight="العربية الكبرى؟"
          lead="نلتزم بتقديم تجربة تأمين مختلفة تقوم على الثقة والوضوح وسرعة الاستجابة."
        />
        <div className="features">
          {FEATURES.map((feature, index) => (
            <Reveal
              as="article"
              className="feature spot"
              data-n={String(index + 1).padStart(2, '0')}
              delay={(index % 3) * 90}
              key={feature.title}
            >
              <div className="feature-icon">
                <Icon name={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
