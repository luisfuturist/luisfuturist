
import decisions from "./tokens";
import { _badge } from "./utils";
const badgeColor = decisions.badge.color.normal;

export default {
  links: [
    _badge(
      "luisfloat",
      "https://linkedin.com/in/luisfloat",
      "LinkedIn",
      badgeColor,
      "linkedin"
    ),
    _badge(
      "@luisfloat",
      "https://twitter.com/luisfloat",
      "Twitter",
      badgeColor,
      "twitter"
    ),
    _badge(
      "contact@luisfloat.com",
      "mailto:contact@luisfloat.com",
      "Email",
      badgeColor,
      "gmail"
    ),
    _badge(
      "@luisfloat",
      "https://instagram.com/luisfloat",
      "Instagram",
      badgeColor,
      "instagram"
    ),
    _badge(
      "luisfloat",
      "https://discord.com",
      "Discord",
      badgeColor,
      "discord"
    ),
  ],
};
