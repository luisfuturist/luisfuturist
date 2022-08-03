import { colors } from "../tokens.js";
import { _badge } from "../utils/factory.js";
const badgeColor = colors.decisions.badge.normal;

export default {
    name: "Workspace",
    items: [
        _badge("Vscodee", "https://code.visualstudio.com/", "Vscode", badgeColor, "visualstudio"),
        _badge("Chrome", "https://google.com/chrome", "Chrome", badgeColor, "chrome"),
        _badge("Ubuntu", "https://ubuntu.com", "Ubuntu", badgeColor, "ubuntu"),
        _badge("Android", "https://android.com", "Android", badgeColor, "android"),
        _badge("Google Apps", "https://apps.google.com", "Google Apps", badgeColor, "google"),
    ],
};