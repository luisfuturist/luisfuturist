import { Markdown, quote } from '@scdev/declarative-markdown';
import content from './content/index.js';

const md = new Markdown(content.about.title);

md
.header(content.about.name, 3)
.header(content.about.heading, 4)
.paragraph(content.about.paragraph + "\n" + quote(content.about.note))

export default md;