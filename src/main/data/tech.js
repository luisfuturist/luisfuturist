import { colors } from "../tokens.js";
import { _badge } from "../utils/factory.js";
const badgeColor = colors.decisions.badge.normal;

export default {
    name: "Technologies",
    items: [
        {
            name: "Skills",
            items: [
                _badge("Javascript", "https://javascript.com", "Javascript", badgeColor, "javascript"),
                _badge("HTML5", "https://html.spec.whatwg.org/", "HTML5", badgeColor, "html5"),
                _badge("CSS3", "https://www.w3.org/Style/CSS/Overview.en.html", "CSS3", badgeColor, "css3"),
                _badge("Stylus", "https://stylus-lang.com/", "Stylus", badgeColor, "stylus"),
                _badge("Less", "https://lesscss.org/", "Less", badgeColor, "less"),
                _badge("Sass", "https://sass-lang.com/", "Sass", badgeColor, "sass"),
                _badge("Git", "https://git-scm.com/", "Git", badgeColor, "git"),
                _badge("Markdown", "https://daringfireball.net/projects/markdown/", "Markdown", badgeColor, "markdown"),
                _badge("Java", "https://www.java.com/", "Java", badgeColor, "java"),
                _badge("Gradle", "https://gradle.org/", "Gradle", badgeColor, "gradle"),
                _badge("JSON", "https://www.json.org/", "JSON", badgeColor, "json"),
                _badge("XML", "https://www.w3.org/TR/REC-xml/", "XML", badgeColor, "w3c"),
            ],
        },
        {
            name: "Learning",
            items: [
                _badge("NestJS", "https://nestjs.com/", "NestJS", badgeColor, "nestjs"),
                _badge("Typescript", "https://www.typescriptlang.org/", "Typescript", badgeColor, "typescript"),
                _badge("NodeJS", "https://nodejs.org/en/", "NodeJS", badgeColor, "nodejs"),
                _badge("Express", "https://expressjs.com/", "Express", badgeColor, "express"),
                _badge("NPM", "https://www.npmjs.com/", "NPM", badgeColor, "npm"),
                _badge("MySQL", "https://mysql.com/", "MySQL", badgeColor, "mysql"),
                _badge("Vue", "https://vuejs.org/", "Vue", badgeColor, "vue.js"),
                _badge("VitePress", "https://vitepress.vuejs.org/", "VitePress", badgeColor, "vue.js"),
            ],
        },
        {
            name: "Viewing",
            items: [
                _badge("Bootstrap", "https://getbootstrap.com/", "Bootstrap", badgeColor, "bootstrap"),
                _badge("React", "https://reactjs.org/", "React", badgeColor, "react"),
                _badge("Angular", "https://angular.io", "Angular", badgeColor, "angular"),
                _badge("Prisma", "https://www.prisma.io/", "Prisma", badgeColor, "prisma"),
                _badge("TailwindCSS", "https://tailwindcss.com/", "TailwindCSS", badgeColor, "tailwindcss"),
                _badge("Spring", "https://spring.io/", "Spring", badgeColor, "spring"),
                _badge("Wordpress", "https://wordpress.com/", "Wordpress", badgeColor, "wordpress"),
                _badge("Woocommerce", "https://woocommerce.com/", "Woocommerce", badgeColor, "woocommerce"),
                _badge("Kotlin", "https://www.jetbrains.com/opensource/kotlin/", "Kotlin", badgeColor, "kotlin"),
            ],
        },
    ],
};