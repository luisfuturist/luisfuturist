
import options from 'lfds-tokens'
import { ProjectCategory, ShieldItem } from '../lib/types'

const gh = (path: string) => `https://github.com/${path}`
const repo = (name: string) => gh(`9aia/${name}`)

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
  projects: [
    {
      name: 'Recent',
      emoji: '✨',
      repos: [
        { name: 'catopt', href: gh('luisfuturist/catopt'), desc: 'Research: a category-theoretic equality-saturation optimizer for tensor programs' },
        { name: 'kuda', href: repo('kuda'), desc: 'A hippocampus for your codebase — repo memory: index, query, verify' },
        { name: 'sturn', href: repo('sturn'), desc: 'The murmuration layer for your repo — evented coordination: ops, claims, topics' },
        { name: 'mimus', href: repo('mimus'), desc: 'Spots the cuckoo eggs in your repo — claim verification: docs-as-tests, memory audit' },
        { name: 'bupha', href: repo('bupha'), desc: "The oxpecker on your repo's back — headless CI toolkit: watch, queue, run, report" },
        { name: 'sepia', href: repo('sepia'), wip: true, desc: 'The chromatophore layer for your coding agents — adaptive sessions: merge, drive, migrate' },
        { name: 'peregrin', href: repo('peregrin'), wip: true, desc: 'The wanderer layer for your agents — evented orchestration: graphs, drivers, approvals' },
        { name: 'myco', href: repo('myco'), wip: true, desc: 'Project management, grown not built — a mycorrhizal network for your agents: tasks, signals, handoffs' },
        { name: 'tarsi', href: repo('tarsi'), desc: 'Generate your changelogs from Git diffs with AI' },
      ],
    },
    {
      name: 'Backlog',
      emoji: '📋',
      repos: [
        { name: 'corax', href: repo('corax'), wip: true, desc: 'Simple offline-first mobile app that enhances PDF reading with TTS and synchronized highlighting' },
        { name: 'physal', href: repo('physal'), wip: true, desc: 'Framework for secure, high-performance, and extensible web applications' },
        { name: 'manto', href: repo('manto'), wip: true, desc: 'Discord server configuration toolchain' },
        { name: 'psitta', href: repo('psitta'), wip: true, desc: 'Next-gen internationalization framework powered by GenAI' },
        { name: 'lusci', href: repo('lusci'), desc: 'Self-hosted Discord bot music player with natural language commands' },
        { name: 'termsite', href: gh('luisfuturist/termsite'), desc: 'Personal SSH-accessible TUI site' },
        { name: 'thal', href: repo('thal'), desc: 'Improve English through conversations with personalized AI characters and real-time UI assistance' },
      ],
    },
    {
      name: 'Awarded',
      emoji: '🏆',
      repos: [
        { name: 'proximity', href: gh('luisfuturist/proximity'), desc: 'AI-powered job semantic matching. Winner of FIAP GS 2025.2 "Future at Work"' },
      ],
    },
    {
      name: 'Deprecated',
      emoji: '📦',
      repos: [
        { name: 'delphis', href: repo('delphis'), desc: 'Secure, zero-config remote development for VS Code editors' },
        { name: 'strigi', href: repo('strigi'), desc: 'CLI command assistance utilizing GenAI-powered natural language prompts' },
        { name: 'vike-island-example', href: gh('luisfuturist/vike-island-example'), desc: 'Islands architecture implementation example using Vike + React + Vue' },
      ],
    },
    {
      name: 'Archived',
      emoji: '🗃️',
      repos: [
        { name: 'metachickens', href: gh('m7tlab/metachickens'), desc: 'Inject mob DNA into a chick, watch it lay eggs of other mobs, and craft spawners in Minecraft' },
        { name: 'terracotta', href: gh('m7tlab/terracotta'), desc: 'Declarative Minecraft project registry management tool' },
        { name: 'de', href: gh('luisfuturist/de'), desc: 'Personal desktop environment scripts and config files' },
        { name: 'website', href: gh('luisfuturist/website'), desc: 'Personal homepage' },
      ],
    },
  ],
} satisfies { links: ShieldItem[]; projects: ProjectCategory[] }
