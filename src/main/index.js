import { inlineCode, Markdown, quote } from '@scdev/declarative-markdown';
import content from './content/index.js';

const md = new Markdown(content.about.title);

md
.header(content.about.name, 3)
.header(content.about.heading, 4)
.paragraph(content.about.paragraph + "\n" + quote(content.about.note))

.header(content.donate.name, 3)
.list(
    content.donate.items.map((coin) => (
        { text: `${coin.name}: ${inlineCode(coin.pk)}` }
    ))
)

export default md;