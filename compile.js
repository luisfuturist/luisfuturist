import fs from 'fs';
import md from './src/main/index.js';

var config = {
    main: {
        src: "./src/main/index.pug",
        dist: "./README.md",
    }
};

const html = md.render()
    .replaceAll("<strong>", "**").replaceAll("</strong>", "**");

fs.writeFile(config.main.dist, html, () => {});