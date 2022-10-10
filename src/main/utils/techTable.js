import { inlineBadges } from "./shields.js";

const techTr = (techs, i, lvl) => {
    const td = (type) => inlineBadges(techs.content[lvl][type])
    const th = techs.headers.v[i];

    return [ th, ...[ "common", "front", "back" ].map((t) => td(t)) ];
};

export {
    techTr,
};