
import options from 'lfds-tokens'
import { OrgItem, ProjectCategory, ShieldItem } from '../lib/types'

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
  ],
  projects: [
    {
      name: 'Recent',
      emoji: '✨',
      repos: [
        { name: 'research-mlopt', href: gh('handl-lang/research-mlopt'), desc: 'Research on applying a category-theoretic language (Handl) for automatic optimization of tensor programs in ML' },
        { name: 'kuda', href: repo('kuda'), desc: 'A hippocampus for your codebase — repo memory: index, query, verify' },
        { name: 'sturn', href: repo('sturn'), desc: 'The murmuration layer for your repo — evented coordination: ops, claims, topics' },
        { name: 'mimus', href: repo('mimus'), desc: 'Spots the cuckoo eggs in your repo — claim verification: docs-as-tests, memory audit' },
        { name: 'bupha', href: repo('bupha'), desc: "The oxpecker on your repo's back — headless CI toolkit: watch, queue, run, report" },
        { name: 'sepia', href: repo('sepia'), wip: true, desc: 'The chromatophore layer for your coding agents — adaptive sessions: merge, drive, migrate' },
        { name: 'peregrin', href: repo('peregrin'), wip: true, desc: 'The wanderer layer for your agents — evented orchestration: graphs, drivers, approvals' },
        { name: 'myco', href: repo('myco'), wip: true, desc: 'Project management, grown not built — a mycorrhizal network for your agents: tasks, signals, handoffs' },
        { name: 'tarsi', href: repo('tarsi'), desc: 'Generate your changelogs from Git diffs with AI' },
        { name: 'handl-dts', href: gh('luisfuturist/handl-dts'), desc: 'Research on declarative handler-topology synthesis for effect-handler languages — Lean formalization, paper, and reference tooling' },
      ],
    },
    {
      name: 'Backlog',
      emoji: '📋',
      repos: [
        { name: 'corax', href: repo('corax'), wip: true, desc: 'Simple offline-first mobile app that enhances PDF reading with TTS and synchronized highlighting' },
        { name: 'physal', href: repo('physal'), wip: true, desc: 'Framework for secure, high-performance, and extensible web applications' },
        { name: 'manto', href: repo('manto'), wip: true, desc: 'Discord server config framework' },
        { name: 'psitta', href: repo('psitta'), wip: true, desc: 'Next-gen internationalization framework powered by LLMs' },
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
      name: 'Archived & Inactive',
      emoji: '🗃️',
      repos: [
        { name: 'metachickens', href: gh('m7tlab/metachickens'), desc: 'Inject mob DNA into a chick, watch it lay eggs of other mobs, and craft spawners in Minecraft' },
        { name: 'terracotta', href: gh('m7tlab/terracotta'), desc: 'Declarative Minecraft project registry management tool' },
        { name: 'de', href: gh('luisfuturist/de'), desc: 'Personal desktop environment scripts and config files' },
        { name: 'website', href: gh('luisfuturist/website'), desc: 'Personal homepage' },
      ],
    },
  ],
  orgs: [
    { name: 'luisfuturist', href: gh('luisfuturist'), desc: 'My personal account, where my website, CV, and personal docs live alongside configs and scripts for my devices and study material from my degree' },
    { name: 'Gaia', href: gh('9aia'), desc: 'An independent R&D and engineering org I founded and lead. We build tools mostly on the web stack, running experimental projects with emerging technologies like GenAI — around repos, agents, and developer workflows' },
    { name: 'NeuralMind', href: gh('neuralmind-ai'), desc: 'Where I work full time. AI R&D on document AI, multi-agent systems, and software factory engineering, mostly on legaltech projects. Day to day that means mostly TypeScript and Python' },
    { name: 'Handl', href: gh('handl-lang'), desc: 'An independent R&D and engineering org I founded, sitting on CS, math, logic, and philosophy. Our main work is a general, category-theoretic formal language defined as data — still in progress' },
    { name: 'm7tlab', href: gh('m7tlab'), desc: 'My playground org for Minecraft projects — JVM ecosystem, especially Kotlin. Kept for historical reasons: Minecraft is what introduced me to engineering. Curiosity about how it worked turned into running servers and writing mods, which is how I learned programming (OOP, Java back then)' },
  ],
} satisfies { links: ShieldItem[]; projects: ProjectCategory[]; orgs: OrgItem[] }
