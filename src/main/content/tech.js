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
                _badge("JavaScript", "https://javascript.com", "JavaScript", badgeColor, "javascript"),
                _badge("Git", "https://git-scm.com/", "Git", badgeColor, "git"),
                _badge("JSON", "https://www.json.org/", "JSON", badgeColor, "json"),
                _badge("XML", "https://www.w3.org/TR/REC-xml/", "XML", badgeColor, "w3c"),
                _badge("Markdown", "https://daringfireball.net/projects/markdown/", "Markdown", badgeColor, "markdown"),
            ],
            front: [
                _badge("HTML5", "https://html.spec.whatwg.org/", "HTML5", badgeColor, "html5"),
                _badge("CSS3", "https://www.w3.org/Style/CSS/Overview.en.html", "CSS3", badgeColor, "css3"),
                _badge("Stylus", "https://stylus-lang.com/", "Stylus", badgeColor, "stylus"),
                _badge("Less", "https://lesscss.org/", "Less", badgeColor, "less"),
                _badge("Sass", "https://sass-lang.com/", "Sass", badgeColor, "sass"),
                _badge("Pug", "https://pugjs.org/", "Pug", badgeColor, "pug"),
                _badge("Handlebars", "https://pugjs.org/", "Handlebars", badgeColor, "handlebars.js"),
            ],
            back: [
                _badge("Node.js", "https://nodejs.org/en/", "Node.js", badgeColor, "nodedotjs"),
                _badge("SQL", "https://www.iso.org/standard/63555.html", "SQL", badgeColor, "microsoftsqlserver"),
                _badge("MySQL", "https://mysql.com/", "MySQL", badgeColor, "mysql"),
            ],
        },
        learning: {
            common: [
                _badge("TypeScript", "https://www.typescriptlang.org/", "TypeScript", badgeColor, "typescript"),
                _badge("NPM", "https://www.npmjs.com/", "NPM", badgeColor, "npm"),
                _badge("Vitest", "https://vitest.dev/", "Vitest", badgeColor, "vite"),
            ],
            front: [
                _badge("Vue.js", "https://vuejs.org/", "Vue.js", badgeColor, "vue.js"),
                _badge("VitePress", "https://vitepress.vuejs.org/", "VitePress", badgeColor, "vue.js"),
                _badge("Vite", "https://vitejs.dev/", "Vite", badgeColor, "vite"),
            ],
            back: [
                _badge("NestJS", "https://nestjs.com/", "NestJS", badgeColor, "nestjs"),
                _badge("Express", "https://expressjs.com/", "Express", badgeColor, "express"),
                _badge("Sequelize", "https://sequelize.org/", "Sequelize", badgeColor, "sequelize"),
            ],
        },
        viewing: {
            common: [
                _badge("Kotlin", "https://www.jetbrains.com/opensource/kotlin/", "Kotlin", badgeColor, "kotlin"),
                _badge("WordPress", "https://wordpress.com/", "WordPress", badgeColor, "wordpress"),
                _badge("WooCommerce", "https://woocommerce.com/", "WooCommerce", badgeColor, "woocommerce"),
                _badge("Gradle", "https://gradle.org/", "Gradle", badgeColor, "gradle"),
            ],
            front: [
                _badge("Bootstrap", "https://getbootstrap.com/", "Bootstrap", badgeColor, "bootstrap"),
                _badge("React", "https://reactjs.org/", "React", badgeColor, "react"),
                _badge("Angular", "https://angular.io", "Angular", badgeColor, "angular"),
                _badge("Tailwind CSS", "https://tailwindcss.com/", "Tailwind CSS", badgeColor, "tailwindcss"),
            ],
            back: [
                _badge("Java", "https://www.java.com/", "Java", badgeColor, "oracle"),
                _badge("Spring", "https://spring.io/", "Spring", badgeColor, "spring"),
                _badge("Prisma", "https://www.prisma.io/", "Prisma", badgeColor, "prisma"),
            ],
        },
    },
};