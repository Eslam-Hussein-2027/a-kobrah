import Bars from '../../components/ui/Bars'
import Button from '../../components/ui/Button'
import CheckList from '../../components/ui/CheckList'
import Icon from '../../components/ui/Icon'
import Logo from '../../components/ui/Logo'
import Reveal from '../../components/ui/Reveal'
import { ROUTES } from '../../config/routes'
import './AboutPreview.css'

const POINTS = ['حلول مصمّمة حسب احتياجك', 'إجراءات مطالبات مبسّطة', 'أقساط تنافسية ومرنة', 'فريق متخصص ذو خبرة']

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container split">
        <Reveal className="about-visual" type="right">
          <div className="av-main">
            <Bars white animated />
            <Logo variant="full" height="clamp(150px, 24vw, 250px)" white />
          </div>
          <div className="av-card av-card-1 float">
            <span className="chip-ico">
              <Icon name="shield" />
            </span>
            <div>
              <strong>حماية شاملة</strong>
              <small>للأفراد والشركات</small>
            </div>
          </div>
          <div className="av-card av-card-2 float-alt">
            <span className="chip-ico ok">
              <Icon name="award" />
            </span>
            <div>
              <strong>خبرة وكفاءة</strong>
              <small>فريق متخصص</small>
            </div>
          </div>
        </Reveal>

        <Reveal type="left">
          <span className="kicker">من نحن</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            شريكك الموثوق في <span className="grad-text">عالم التأمين</span>
          </h2>
          <p className="lead">
            العربية الكبرى للتأمين المساهمة شركة ليبية متخصصة في تقديم خدمات التأمين بمختلف فروعه، نعمل وفق أعلى
            المعايير المهنية لنقدّم لعملائنا حلولًا موثوقة تحمي ممتلكاتهم وتضمن استقرار أعمالهم.
          </p>
          <CheckList items={POINTS} columns={2} />
          <Button to={ROUTES.about} icon="arrow">
            اقرأ المزيد عنّا
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
