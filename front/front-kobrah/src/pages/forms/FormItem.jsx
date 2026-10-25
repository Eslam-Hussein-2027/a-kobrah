import Icon from '../../components/ui/Icon'
import { MESSAGES } from '../../config/messages'
import { useToast } from '../../context/toast'

/** One row of the forms board. Until its PDF is uploaded the row says so instead of offering a download. */
export default function FormItem({ form, hidden }) {
  const toast = useToast()

  return (
    <li className="board-row" data-cat={form.category} hidden={hidden}>
      <span className="board-cat">{form.category_label}</span>
      <div className="board-body">
        <h2>{form.title}</h2>
        <p>{form.description}</p>
      </div>
      {form.download_url ? (
        <a className="board-dl" href={form.download_url} aria-label={`تحميل ${form.title}`} download>
          <Icon name="download" />
          تحميل <small>PDF</small>
        </a>
      ) : (
        <button
          className="board-dl is-pending"
          type="button"
          aria-label={`ملف ${form.title} غير متوفر بعد`}
          onClick={() => toast(MESSAGES.formFileMissing)}
        >
          <Icon name="clock" />
          الملف قريبًا
        </button>
      )}
    </li>
  )
}
