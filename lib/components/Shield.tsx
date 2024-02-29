import { getShieldUrl } from '../utils'
import { ShieldItem } from '../types'

interface ShieldProps {
  item: ShieldItem
}

function Shield({ item }: ShieldProps) {
  return (
    <a href={item.href}>
      <img src={getShieldUrl(item)} alt={item.alt} />
    </a>
  )
}

export default Shield
