import Icon from './Icon'
import './CheckList.css'

export default function CheckList({ items, columns = 1 }) {
  return (
    <ul className={columns === 2 ? 'checks checks-2' : 'checks'}>
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  )
}
