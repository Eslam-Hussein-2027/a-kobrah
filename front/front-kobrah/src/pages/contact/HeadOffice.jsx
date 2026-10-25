import Button from '../../components/ui/Button'
import Logo from '../../components/ui/Logo'
import { useContent } from '../../context/content'
import { mapsUrl } from '../../utils/contact'

/** The head office as the network's terminus, with a link to open it in maps. */
export default function HeadOffice() {
  const { site } = useContent()

  return (
    <section className="head-office" aria-labelledby="office-title">
      <span className="office-track" aria-hidden="true" />
      <div className="office-body">
        <Logo variant="mark" height={40} decorative />
        <div>
          <h2 id="office-title">{site.name}</h2>
          <p>{site.address}</p>
        </div>
        <Button href={mapsUrl(site.map_query)} variant="ghost" icon="arrow" target="_blank" rel="noopener noreferrer">
          ابحث عنّا في الخرائط
        </Button>
      </div>
    </section>
  )
}
