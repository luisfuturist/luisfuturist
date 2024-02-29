import { ShieldItem } from './types'

export const getShieldUrl = (item: ShieldItem) => {
  let { label, name, color, logo } = item
  name = encodeURIComponent(name)
  label = label || ''
  color = color.replace('#', '')
  logo = logo || ''

  return `https://img.shields.io/badge/${label}-${name}-${color}?style=flat-square&logo=${logo}`.replaceAll(
    ' ',
    '%20'
  )
}
