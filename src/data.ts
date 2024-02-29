
import options from 'lfds-tokens'
import { ShieldItem } from '../lib/types'

const { color } = options
const badgeColor = color.gray['2']

export default {
  links: [
    { name: 'luisfloat', href: 'https://linkedin.com/in/luisfloat', alt: 'LinkedIn',
    color: badgeColor, logo: 'linkedin' },
    { name: '@luisfloat', href: 'https://x.com/luisfloat', alt: 'X (Social Media)',
    color: badgeColor, logo: 'x' },
    { name: 'luisfloat', href: 'https://discord.com/luisfloat', alt: 'Discord',
    color: badgeColor, logo: 'discord' },
  ],
} satisfies { links: ShieldItem[] }
