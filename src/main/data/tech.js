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
                {
                    link: "https://getbootstrap.com/",
                    alt: "Bootstrap",
                    name: "Bootstrap",
                    color: badgeColor,
                    logo: "bootstrap"
                },
                {
                    link: "https://reactjs.org/",
                    alt: "React",
                    name: "React",
                    color: badgeColor,
                    logo: "react"
                },
                {
                    link: "https://www.prisma.io/",
                    alt: "Prisma",
                    name: "Prisma",
                    color: badgeColor,
                    logo: "prisma"
                },
                {
                    link: "https://tailwindcss.com/",
                    alt: "TailwindCSS",
                    name: "TailwindCSS",
                    color: badgeColor,
                    logo: "tailwindcss"
                },
                {
                    link: "https://spring.io/",
                    alt: "Spring",
                    name: "Spring",
                    color: badgeColor,
                    logo: "spring"
                },
                {
                    link: "https://wordpress.com/",
                    alt: "Wordpress",
                    name: "Wordpress",
                    color: badgeColor,
                    logo: "wordpress"
                },
                {
                    link: "https://woocommerce.com/",
                    alt: "Woocommerce",
                    name: "Woocommerce",
                    color: badgeColor,
                    logo: "woocommerce"
                },
                {
                    link: "https://www.jetbrains.com/opensource/kotlin/",
                    alt: "Kotlin",
                    name: "Kotlin",
                    color: badgeColor,
                    logo: "kotlin"
                },
            ],
        },
    ],
};