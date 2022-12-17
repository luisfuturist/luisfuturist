import { Markdown, quote, bold } from '@scdev/declarative-markdown';
import { inlineBadges } from './utils/shields.js';
import content from './content/index.js';

const md = new Markdown(" ");

md
.paragraph(bold(content.title) + " " + content.headline, 4)
.paragraph(content.about + "\n" + quote(content.quote))
.paragraph(content.cta)
.paragraph(inlineBadges(content.links))

export default md;