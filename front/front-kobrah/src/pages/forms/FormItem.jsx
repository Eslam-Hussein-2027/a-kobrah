import Icon from '../../components/ui/Icon'
import Reveal from '../../components/ui/Reveal'
import { MESSAGES } from '../../config/messages'
import { useToast } from '../../context/toast'

/** One downloadable form; falls back to a notice while its PDF is not uploaded yet. */
export default function FormItem({ form, delay, hidden }) {
  const toast = useToast()
  const label = `تحميل ${form.title}`

  return (
    <Reveal as="article" className="form-item" delay={delay} hidden={hidden}>
      <div className="form-file">
        <Icon name="file" />
        <span>PDF</span>
      </div>
      <div className="form-body">
        <span className="tag">{form.category_label}</span>
        <h3>{form.title}</h3>
        <p>{form.description}</p>
      </div>
      {form.download_url ? (
        <a className="form-dl" href={form.download_url} aria-label={label} download>
          <Icon name="download" />
        </a>
      ) : (
        <button className="form-dl" type="button" aria-label={label} onClick={() => toast(MESSAGES.formFileMissing)}>
          <Icon name="download" />
        </button>
      )}
    </Reveal>
  )
}
