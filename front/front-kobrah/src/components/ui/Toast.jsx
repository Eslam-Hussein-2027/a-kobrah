import Icon from './Icon'
import './Toast.css'

const ICON_BY_TYPE = { success: 'check', error: 'alert', info: 'info' }

export default function Toast({ message, type, visible }) {
  return (
    <div className={`toast toast-${type}${visible ? ' show' : ''}`} role="status" aria-live="polite">
      <span className="toast-ico">
        <Icon name={ICON_BY_TYPE[type] ?? 'info'} />
      </span>
      <span className="toast-msg">{message}</span>
    </div>
  )
}
