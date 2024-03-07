
import options from 'lfds-tokens'
import { ShieldItem } from '../lib/types'

const { color } = options
const badgeColor = color.gray['2']

export default {
  links: [
    { name: 'luisfuturist', href: 'https://linkedin.com/in/luisfuturist', alt: 'LinkedIn',
    color: badgeColor, logo: 'linkedin' },
    { name: '@luisfuturist', href: 'https://x.com/luisfuturist', alt: 'X (Social Media)',
    color: badgeColor, logo: 'x' },
    { name: 'luisfuturist', href: 'https://discord.com/luisfuturist', alt: 'Discord',
    color: badgeColor, logo: 'discord' },
  ],
} satisfies { links: ShieldItem[] }
