import SectionTitle from '../../components/ui/SectionTitle'
import './WhyUs.css'

const REASONS = [
  { title: 'خبرة واحترافية', text: 'كوادر مؤهلة تمتلك خبرة واسعة في مجالات التأمين وإدارة المخاطر.' },
  { title: 'تغطية شاملة', text: 'منتجات تأمينية متنوعة تغطي الأفراد والشركات في مختلف القطاعات.' },
  { title: 'أسعار تنافسية', text: 'أقساط مدروسة تناسب احتياجاتك وميزانيتك دون المساس بجودة التغطية.' },
  { title: 'خدمة عملاء متميزة', text: 'فريق جاهز للرد على استفساراتك ومرافقتك في كل خطوة.' },
  { title: 'شفافية ووضوح', text: 'شروط واضحة ووثائق مفهومة، بلا تفاصيل مخفية أو مفاجآت.' },
  { title: 'سرعة في صرف التعويضات', text: 'إجراءات مبسّطة ومعاينة سريعة تضمن حصولك على تعويضك في أقصر وقت ممكن.' },
]

export default function WhyUs() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container why-grid">
        <SectionTitle
          id="why-title"
          title="لماذا تختار العربية الكبرى؟"
          lede="نلتزم بتقديم تجربة تأمين مختلفة تقوم على الثقة والوضوح وسرعة الاستجابة."
        />
        <ol className="why-line">
          {REASONS.map((reason) => (
            <li className="why-stop" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
