import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import Logo from '../../components/ui/Logo'
import Reveal from '../../components/ui/Reveal'
import { useContent } from '../../context/content'
import { mapsUrl } from '../../utils/contact'

/** Illustrated map with the head-office address and a link to Google Maps. */
export default function MapCard() {
  const { site } = useContent()

  return (
    <Reveal className="map-card">
      <span className="water" />
      <span className="park" />
      <span className="road r1" />
      <span className="road r2" />
      <span className="road r3" />
      <span className="road r4" />
      <span className="map-pulse" />
      <span className="map-pin">
        <Icon name="pin" />
      </span>
      <div className="map-info">
        <Logo variant="mark" height={38} decorative />
        <div>
          <strong>{site.name}</strong>
          <small>{site.address}</small>
        </div>
        <Button href={mapsUrl(site.map_query)} size="sm" icon="arrow" target="_blank" rel="noopener noreferrer">
          افتح في الخرائط
        </Button>
      </div>
    </Reveal>
  )
}
