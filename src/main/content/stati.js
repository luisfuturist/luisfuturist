import decisions from "../tokens.js";
import { _badgeLabel } from "../utils/factory.js";
const badgeColor = decisions.badge.color.primary;

export default {
    name: "Luis",
    items: [
        _badgeLabel("freelancing; open to work", "working", "https://github.com/luisfloat", "working status", badgeColor),
        _badgeLabel("autodidactically", "learning", "https://github.com/luisfloat", "learning status", badgeColor),
        _badgeLabel("Brazil, SC", "living", "https://www.google.com/maps/place/State+of+Santa+Catarina", "living status", badgeColor),
    ],
};