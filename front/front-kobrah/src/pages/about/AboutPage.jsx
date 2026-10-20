import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import Logo from '../../components/ui/Logo'
import PageHero from '../../components/ui/PageHero'
import Reveal from '../../components/ui/Reveal'
import SectionHead from '../../components/ui/SectionHead'
import { ROUTES } from '../../config/routes'
import './AboutPage.css'

const LINES_OF_BUSINESS = [
  { icon: 'user', title: 'تأمين الأفراد', text: 'حماية لك ولعائلتك' },
  { icon: 'briefcase', title: 'تأمين الشركات', text: 'استمرارية لأعمالك' },
  { icon: 'ship', title: 'التأمين البحري', text: 'أمان لبضائعك' },
  { icon: 'hardhat', title: 'التأمين الهندسي', text: 'حماية لمشاريعك' },
]

const IDENTITY = [
  {
    icon: 'eye',
    title: 'رؤيتنا',
    text: 'أن نكون الخيار الأول للتأمين في ليبيا، ونموذجًا يُحتذى به في الجودة والموثوقية والابتكار.',
  },
  {
    icon: 'target',
    title: 'رسالتنا',
    text: 'تقديم حلول تأمينية متكاملة ومبتكرة تلبي احتياجات عملائنا، من خلال فريق محترف وخدمة متميزة وتعويضات عادلة وسريعة.',
  },
  {
    icon: 'gem',
    title: 'قيمنا',
    text: 'النزاهة والشفافية، والالتزام بالوعود، والتميز في الخدمة، والعمل بروح الفريق الواحد.',
  },
]

const PRINCIPLES = [
  { icon: 'shield', title: 'النزاهة', text: 'نتعامل بأمانة ومسؤولية' },
  { icon: 'eye', title: 'الشفافية', text: 'وضوح في الشروط والإجراءات' },
  { icon: 'clipboard', title: 'الالتزام', text: 'نفي بوعودنا لعملائنا' },
  { icon: 'zap', title: 'التطوير', text: 'نطوّر خدماتنا باستمرار' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero title="من نحن" description="تعرّف على العربية الكبرى للتأمين، رؤيتنا ورسالتنا والقيم التي نعمل بها." />

      <section className="section">
        <div className="container split">
          <Reveal type="right">
            <span className="kicker">قصتنا</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              العربية الكبرى <span className="grad-text">للتأمين المساهمة</span>
            </h2>
            <p className="lead">
              العربية الكبرى للتأمين المساهمة شركة ليبية متخصصة في تقديم خدمات التأمين بمختلف فروعه للأفراد والشركات.
              نعمل وفق أعلى المعايير المهنية وبما يتوافق مع التشريعات المنظمة لقطاع التأمين في ليبيا.
            </p>
            <p>
              نؤمن بأن التأمين ليس مجرد وثيقة، بل وعدٌ بالوقوف إلى جانب عملائنا في أصعب اللحظات؛ لذلك نحرص على سرعة
              الاستجابة، وعدالة التعويض، ووضوح الشروط، ونسعى باستمرار لتطوير منتجاتنا وخدماتنا بما يواكب احتياجات السوق
              الليبي.
            </p>
            <Button to={ROUTES.contact} icon="arrow">
              تواصل معنا
            </Button>
          </Reveal>

          <Reveal className="tiles" type="left">
            {LINES_OF_BUSINESS.map((item) => (
              <div className="tile" key={item.title}>
                <Icon name={item.icon} />
                {item.title}
                <small>{item.text}</small>
              </div>
            ))}
            <div className="tiles-center">
              <Logo variant="mark" height={43} decorative />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHead kicker="هويتنا" title="رؤيتنا ورسالتنا" highlight="وقيمنا" />
          <div className="vmv">
            {IDENTITY.map((item, index) => (
              <Reveal as="article" className="vmv-card" delay={index * 120} key={item.title}>
                <div className="feature-icon">
                  <Icon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="ما نلتزم به" title="مبادئ" highlight="نعمل بها كل يوم" />
          <div className="values">
            {PRINCIPLES.map((item, index) => (
              <Reveal className="value" delay={index * 90} key={item.title}>
                <Icon name={item.icon} />
                <div>
                  {item.title}
                  <small>{item.text}</small>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
