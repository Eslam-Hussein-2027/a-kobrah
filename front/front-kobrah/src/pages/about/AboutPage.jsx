import { Link } from 'react-router'
import Button from '../../components/ui/Button'
import LineBullet from '../../components/ui/LineBullet'
import RouteHeader from '../../components/ui/RouteHeader'
import SectionTitle from '../../components/ui/SectionTitle'
import { LINES } from '../../config/lines'
import { ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import './AboutPage.css'

const IDENTITY = [
  {
    title: 'رؤيتنا',
    text: 'أن نكون الخيار الأول للتأمين في ليبيا، ونموذجًا يُحتذى به في الجودة والموثوقية والابتكار.',
  },
  {
    title: 'رسالتنا',
    text: 'تقديم حلول تأمينية متكاملة ومبتكرة تلبي احتياجات عملائنا، من خلال فريق محترف وخدمة متميزة وتعويضات عادلة وسريعة.',
  },
  { title: 'قيمنا', text: 'النزاهة والشفافية، والالتزام بالوعود، والتميز في الخدمة، والعمل بروح الفريق الواحد.' },
]

const PRINCIPLES = [
  { title: 'النزاهة', text: 'نتعامل بأمانة ومسؤولية' },
  { title: 'الشفافية', text: 'وضوح في الشروط والإجراءات' },
  { title: 'الالتزام', text: 'نفي بوعودنا لعملائنا' },
  { title: 'التطوير', text: 'نطوّر خدماتنا باستمرار' },
]

export default function AboutPage() {
  const { products } = useContent()

  return (
    <>
      <RouteHeader
        path={ROUTES.about}
        title="من نحن"
        description="تعرّف على العربية الكبرى للتأمين، رؤيتنا ورسالتنا والقيم التي نعمل بها."
      />

      <section className="section" aria-labelledby="story-title">
        <div className="container story-grid">
          <div className="story-copy">
            <h2 id="story-title">العربية الكبرى للتأمين المساهمة</h2>
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
          </div>

          <div className="about-network" role="group" aria-label="شبكة منتجاتنا">
            {['personal', 'business'].map((line) => (
              <div className={`about-line line-${line}`} key={line}>
                <h3>
                  <LineBullet line={line} />
                  {LINES[line].name}
                </h3>
                <ol>
                  {products[line].map((product) => (
                    <li key={product.slug}>
                      <Link to={LINES[line].route}>{product.title}</Link>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="identity-title">
        <div className="container">
          <SectionTitle id="identity-title" title="رؤيتنا ورسالتنا وقيمنا" />
          <ol className="identity-route">
            {IDENTITY.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
          <h3 className="principles-title" id="principles-title">
            مبادئ نعمل بها كل يوم
          </h3>
          <ul className="principles" aria-labelledby="principles-title">
            {PRINCIPLES.map((item) => (
              <li key={item.title}>
                <span>
                  <strong>{item.title}</strong> · {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
