import decisions from "../tokens.js";
import { _badge } from "../utils/factory.js";
const badgeColor = decisions.badge.color.normal;

export default {
    title: "Luis Float",
    headline: "Full Stack Developer • Brazil, SC",
    about: "I'm a self-taught web developer with proficiency in the JavaScript ecosystem. I also like science fiction, digital design and philosophy.",
    quote: "“That's all it is: information. Even a simulated experience or a dream; simultaneous reality and fantasy. Any way you look at it, all the information that a person accumulates in a lifetime is just a drop in the bucket..” – Batou",
    cta: "Feel free to reach me at any social media.",
    links: [
        _badge("luisfloat", "https://linkedin.com/in/luisfloat", "LinkedIn", badgeColor, "linkedin"),
        _badge("@luisfloat", "https://twitter.com/luisfloat", "Twitter", badgeColor, "twitter"),
        _badge("contact@luisfloat.com", "mailto:contact@luisfloat.com", "Email", badgeColor, "gmail"),
        _badge("@luisfloat", "https://instagram.com/luisfloat", "Instagram", badgeColor, "instagram"),
        _badge("luisfloat#9971", "https://discord.com", "Discord", badgeColor, "discord"),
    ],
}