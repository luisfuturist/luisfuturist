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
                {
                    link: "https://nestjs.com/",
                    alt: "NestJS",
                    name: "NestJS",
                    color: badgeColor,
                    logo: "nestjs"
                },
                {
                    link: "https://www.typescriptlang.org/",
                    alt: "Typescript",
                    name: "Typescript",
                    color: badgeColor,
                    logo: "typescript"
                },
                {
                    link: "https://nodejs.org/en/",
                    alt: "NodeJS",
                    name: "NodeJS",
                    color: badgeColor,
                    logo: "node.js"
                },
                {
                    link: "https://expressjs.com/",
                    alt: "Express",
                    name: "Express",
                    color: badgeColor,
                    logo: "express"
                },
                {
                    link: "https://www.npmjs.com/",
                    alt: "NPM",
                    name: "NPM",
                    color: badgeColor,
                    logo: "npm"
                },
                {
                    link: "https://mysql.com/",
                    alt: "MySQL",
                    name: "MySQL",
                    color: badgeColor,
                    logo: "mysql"
                },
                {
                    link: "https://vuejs.org/",
                    alt: "Vue",
                    name: "Vue",
                    color: badgeColor,
                    logo: "vue.js"
                },
                {
                    link: "https://vitepress.vuejs.org/",
                    alt: "VitePress",
                    name: "VitePress",
                    color: badgeColor,
                    logo: "vue.js"
                },
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