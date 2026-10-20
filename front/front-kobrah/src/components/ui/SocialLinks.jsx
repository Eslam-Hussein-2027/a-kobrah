import { useContent } from '../../context/content'
import Icon from './Icon'
import './SocialLinks.css'

const NETWORKS = [
  { key: 'facebook', label: 'فيسبوك' },
  { key: 'instagram', label: 'إنستغرام' },
  { key: 'linkedin', label: 'لينكدإن' },
]

export default function SocialLinks({ className = 'socials' }) {
  const { site } = useContent()

  return (
    <div className={className}>
      {NETWORKS.map(({ key, label }) => {
        const url = site.social?.[key]
        return (
          <a
            key={key}
            href={url || '#'}
            aria-label={label}
            {...(url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon name={key} />
          </a>
        )
      })}
    </div>
  )
}
