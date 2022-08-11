import { colors } from "../tokens.js";
import { _badge } from "../utils/factory.js";
const badgeColor = colors.decisions.badge.normal;

export default {
    name: "Technologies",
    headers: {
        v: [
            "Skills", 
            "Learning",
            "Viewing",
        ],
        h: [
            "Common",
            "Frontend",
            "Backend",
        ],
    },
    content: {
        skills: {
            common: [
                _badge("Javascript", "https://javascript.com", "Javascript", badgeColor, "javascript"),
                _badge("Git", "https://git-scm.com/", "Git", badgeColor, "git"),
                _badge("JSON", "https://www.json.org/", "JSON", badgeColor, "json"),
                _badge("XML", "https://www.w3.org/TR/REC-xml/", "XML", badgeColor, "w3c"),
                _badge("Gradle", "https://gradle.org/", "Gradle", badgeColor, "gradle"),
                _badge("Markdown", "https://daringfireball.net/projects/markdown/", "Markdown", badgeColor, "markdown"),
            ],
            front: [
                _badge("HTML5", "https://html.spec.whatwg.org/", "HTML5", badgeColor, "html5"),
                _badge("CSS3", "https://www.w3.org/Style/CSS/Overview.en.html", "CSS3", badgeColor, "css3"),
                _badge("Stylus", "https://stylus-lang.com/", "Stylus", badgeColor, "stylus"),
                _badge("Less", "https://lesscss.org/", "Less", badgeColor, "less"),
                _badge("Sass", "https://sass-lang.com/", "Sass", badgeColor, "sass"),
            ],
            back: [
                _badge("Java", "https://www.java.com/", "Java", badgeColor, "oracle"),
                _badge("SQL", "https://www.iso.org/standard/63555.html", "SQL", badgeColor, "microsoftsqlserver"),
                _badge("MySQL", "https://mysql.com/", "MySQL", badgeColor, "mysql"),
            ],
        },
        learning: {
            common: [
                _badge("Typescript", "https://www.typescriptlang.org/", "Typescript", badgeColor, "typescript"),
                _badge("NPM", "https://www.npmjs.com/", "NPM", badgeColor, "npm"),
            ],
            front: [
                _badge("Vue", "https://vuejs.org/", "Vue", badgeColor, "vue.js"),
                _badge("VitePress", "https://vitepress.vuejs.org/", "VitePress", badgeColor, "vue.js"),
            ],
            back: [
                _badge("NestJS", "https://nestjs.com/", "NestJS", badgeColor, "nestjs"),
                _badge("NodeJS", "https://nodejs.org/en/", "NodeJS", badgeColor, "nodedotjs"),
                _badge("Express", "https://expressjs.com/", "Express", badgeColor, "express"),
            ],
        },
        viewing: {
            common: [
                _badge("Kotlin", "https://www.jetbrains.com/opensource/kotlin/", "Kotlin", badgeColor, "kotlin"),
                _badge("Wordpress", "https://wordpress.com/", "Wordpress", badgeColor, "wordpress"),
                _badge("Woocommerce", "https://woocommerce.com/", "Woocommerce", badgeColor, "woocommerce"),
            ],
            front: [
                _badge("Bootstrap", "https://getbootstrap.com/", "Bootstrap", badgeColor, "bootstrap"),
                _badge("React", "https://reactjs.org/", "React", badgeColor, "react"),
                _badge("Angular", "https://angular.io", "Angular", badgeColor, "angular"),
                _badge("TailwindCSS", "https://tailwindcss.com/", "TailwindCSS", badgeColor, "tailwindcss"),
            ],
            back: [
                _badge("Spring", "https://spring.io/", "Spring", badgeColor, "spring"),
                _badge("Prisma", "https://www.prisma.io/", "Prisma", badgeColor, "prisma"),
                _badge("Sequelize", "https://sequelize.org/", "Sequelize", badgeColor, "sequelize"),
            ],
        },
    },
};