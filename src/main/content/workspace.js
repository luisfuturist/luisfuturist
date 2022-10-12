import decisions from "../tokens.js";
import { _badge } from "../utils/factory.js";
const badgeColor = decisions.badge.color.normal;

export default {
    name: "Workspace",
    items: [
        _badge("Visual Studio Code", "https://code.visualstudio.com/", "Vscode", badgeColor, "visualstudio"),
        _badge("Chrome", "https://google.com/chrome", "Chrome", badgeColor, "googlechrome"),
        _badge("Linux", "https://www.linuxfoundation.org/", "Linux", badgeColor, "linux"),
        _badge("Android", "https://android.com", "Android", badgeColor, "android"),
        _badge("Google Apps", "https://apps.google.com", "Google Apps", badgeColor, "google"),
        _badge("GitHub", "https://github.com", "GitHub", badgeColor, "github"),
    ],
};