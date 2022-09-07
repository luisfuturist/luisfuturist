import { colors } from "../tokens.js";
import { _badge } from "../utils/factory.js";
const badgeColor = colors.decisions.badge.normal;

export default {
    name: "Socials",
    items: [
        _badge("Twitter", "https://twitter.com/luisfloat", "Twitter", badgeColor, "twitter"),
        _badge("GitHub", "https://github.com/luisfloat", "GitHub", badgeColor, "github"),
        _badge("Instagram", "https://instagram.com/luisfloat", "Instagram", badgeColor, "instagram"),
        _badge("Gmail", "mailto:contact@luisfloat.com", "Gmail", badgeColor, "gmail"),
    ],
};