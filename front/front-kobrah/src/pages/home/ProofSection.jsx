import { Link } from 'react-router'
import CheckList from '../../components/ui/CheckList'
import LineBullet from '../../components/ui/LineBullet'
import { ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import './ProofSection.css'

const POINTS = ['حلول مصمّمة حسب احتياجك', 'إجراءات مطالبات مبسّطة', 'أقساط تنافسية ومرنة', 'فريق متخصص ذو خبرة']

/** Who the company is, and the sectors its businesses line already serves. */
export default function ProofSection() {
  const { sectors } = useContent()

  return (
    <section className="section section-tint" aria-labelledby="proof-title">
      <div className="container proof-grid">
        <div className="proof-copy">
          <h2 id="proof-title">شريكك الموثوق في عالم التأمين</h2>
          <p className="lead">
            العربية الكبرى للتأمين المساهمة شركة ليبية متخصصة في تقديم خدمات التأمين بمختلف فروعه، نعمل وفق أعلى
            المعايير المهنية لنقدّم لعملائنا حلولًا موثوقة تحمي ممتلكاتهم وتضمن استقرار أعمالهم.
          </p>
          <CheckList items={POINTS} columns={2} />
          <Link className="text-link" to={ROUTES.about}>
            اقرأ المزيد عنّا
          </Link>
        </div>

        <div className="sector-line">
          <h3>
            <LineBullet line="business" />
            قطاعات نخدمها
          </h3>
          <ul className="sector-stops">
            {sectors.map((sector) => (
              <li key={sector.name}>{sector.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
