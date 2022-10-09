import { Markdown } from '@scdev/declarative-markdown';
import content from './content/index.js';

const md = new Markdown(content.about.title);

export default md;