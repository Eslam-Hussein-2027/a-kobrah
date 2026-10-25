import './CheckList.css'

/** List whose markers are small station rings. */
export default function CheckList({ items, columns = 1, className = '' }) {
  return (
    <ul className={['checks', columns === 2 && 'checks-2', className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
