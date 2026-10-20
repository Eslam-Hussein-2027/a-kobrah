import { useRef } from 'react'
import Bars from '../../components/ui/Bars'
import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import Logo from '../../components/ui/Logo'
import Reveal from '../../components/ui/Reveal'
import { ROUTES } from '../../config/routes'
import useRotator from '../../hooks/useRotator'
import { hasFinePointer, prefersReducedMotion } from '../../utils/motion'
import './HeroSection.css'

const ROTATING_WORDS = ['سيارتك', 'صحتك', 'منزلك', 'أعمالك', 'رحلاتك']
const TRUST_POINTS = ['تعويضات سريعة', 'تغطية شاملة', 'خدمة عملاء متميزة']

// Sample policy card shown in the hero illustration.
const POLICY_ROWS = [
  { icon: 'car', label: 'تأمين السيارات', value: 'شامل', fill: '100%', delay: '1.2s' },
  { icon: 'heart', label: 'التأمين الصحي', value: 'عائلي', fill: '86%', delay: '1.4s' },
  { icon: 'home', label: 'تأمين المنزل', value: 'المبنى والمحتويات', fill: '72%', delay: '1.6s' },
]

const scrollToServices = (event) => {
  event.preventDefault()
  document.getElementById('services')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

export default function HeroSection() {
  const { current, previous } = useRotator(ROTATING_WORDS.length)
  const cardRef = useRef(null)
  const canTilt = hasFinePointer() && !prefersReducedMotion()

  const tilt = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
  }
  const resetTilt = () => {
    cardRef.current.style.transform = ''
  }

  return (
    <section className="hero">
      <div className="hero-bg">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="dots" />
      </div>

      <div className="container hero-grid">
        <div className="hero-content">
          <Reveal className="hero-badge">
            <b>
              <Icon name="shield" />
            </b>
            شركة ليبية مساهمة متخصصة في التأمين
          </Reveal>
          <Reveal as="h1" delay={100}>
            حمايةٌ تثق بها
            <br />
            <span className="grad-text">لكلّ ما يهمّك</span>
          </Reveal>
          <Reveal as="p" className="hero-rotate" delay={200}>
            نحن هنا لنحمي{' '}
            <span className="rotator">
              {ROTATING_WORDS.map((word, index) => (
                <span key={word} className={index === current ? 'is-on' : index === previous ? 'is-out' : undefined}>
                  {word}
                </span>
              ))}
            </span>
          </Reveal>
          <Reveal as="p" className="lead" delay={300}>
            تقدّم العربية الكبرى للتأمين المساهمة باقة متكاملة من الحلول التأمينية للأفراد والشركات، بخدمة سريعة
            وتعويضات عادلة وفريق متخصص يرافقك في كل خطوة.
          </Reveal>
          <Reveal className="hero-actions" delay={400}>
            <Button to={ROUTES.contact} icon="arrow">
              اطلب عرض سعر
            </Button>
            <Button href="#services" variant="ghost" onClick={scrollToServices}>
              اكتشف خدماتنا
            </Button>
          </Reveal>
          <Reveal className="trust" delay={500}>
            {TRUST_POINTS.map((point) => (
              <span key={point}>
                <Icon name="check" />
                {point}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal
          className="hero-visual"
          type="zoom"
          delay={250}
          onPointerMove={canTilt ? tilt : undefined}
          onPointerLeave={canTilt ? resetTilt : undefined}
        >
          <div className="hv-ring" aria-hidden="true" />
          <Bars animated className="hv-bars" />

          <div className="hv-card" ref={cardRef}>
            <div className="hv-head">
              <Logo variant="mark" height={46} className="hv-logo" decorative />
              <div>
                <strong>وثيقة التأمين</strong>
                <small>العربية الكبرى للتأمين</small>
              </div>
              <span className="hv-status">سارية</span>
            </div>
            <div className="hv-rows">
              {POLICY_ROWS.map((row) => (
                <div className="hv-row" key={row.label}>
                  <span>
                    <Icon name={row.icon} />
                    {row.label}
                  </span>
                  <b>{row.value}</b>
                  <i style={{ '--w': row.fill, '--dl': row.delay }} />
                </div>
              ))}
            </div>
            <div className="hv-foot">
              <div>
                رقم الوثيقة<b>GAI-2026-0418</b>
              </div>
              <div>
                صالحة حتى<b>12 / 2027</b>
              </div>
            </div>
          </div>

          <div className="hv-chip chip-1 float">
            <span className="chip-ico ok">
              <Icon name="check" />
            </span>
            <div>
              <strong>تمت الموافقة على التعويض</strong>
              <small>إجراءات سريعة وواضحة</small>
            </div>
          </div>
          <div className="hv-chip chip-2 float-alt">
            <span className="chip-ico">
              <Icon name="headset" />
            </span>
            <div>
              <strong>فريقنا معك دائمًا</strong>
              <small>دعم ومتابعة مستمرة</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
