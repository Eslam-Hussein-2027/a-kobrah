// Geometry of the desktop network map. x runs 0–1000 across the map width (physical left → right),
// y is in px. Lines start at the right (the reading start in Arabic) and meet at the services
// interchange on the left, then continue as one trunk to the terminus.
export const MAP = {
  height: 760,
  firstX: 890,
  lastX: 330,
  bendX: 240,
  interchangeX: 200,
  terminusX: 44,
  y: { personal: 520, business: 678 },
}

MAP.trunkY = (MAP.y.personal + MAP.y.business) / 2

export function stationXs(count) {
  if (count <= 1) return [MAP.firstX]
  const step = (MAP.firstX - MAP.lastX) / (count - 1)
  return Array.from({ length: count }, (_, i) => MAP.firstX - i * step)
}

export function linePath(line) {
  const y = MAP.y[line]
  const toward = line === 'personal' ? 1 : -1
  const diagonal = MAP.bendX - MAP.interchangeX
  return `M985 ${y} H${MAP.bendX} L${MAP.interchangeX} ${y + toward * diagonal} V${MAP.trunkY}`
}

export const trunkPath = `M${MAP.interchangeX} ${MAP.trunkY} H${MAP.terminusX}`
