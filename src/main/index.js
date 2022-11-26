import { Markdown, quote } from '@scdev/declarative-markdown';
import { inlineBadges } from './utils/shields.js';
import { techTr } from './utils/techTable.js';
import { about, stati, techs, workspace, contacts, donate } from './content/index.js';

const md = new Markdown(about.title);

const coin = (data) => [data.name, data.pk];

md
.paragraph(inlineBadges(stati.items))

.header(about.name, 3)
.header(about.heading, 4)
.paragraph(about.paragraph + "\n" + quote(about.note))

.header(techs.name, 3)
.table(
    [ '', ...techs.headers.h.map((th) => th) ],
    [...[
        "skills",
        "learning",
        "viewing"
    ].map((l, i) => techTr(techs, i, l))]
)

.header(workspace.name, 3)
.paragraph(inlineBadges(workspace.items))

.header(donate.name, 3)
.table(
    [ "Name", "Address" ],
    [ ...donate.items.map((data) => coin(data)) ],
)

.header(contacts.name, 3)
.paragraph(inlineBadges(contacts.items))

export default md;