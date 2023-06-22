import { NodeHtmlMarkdown } from "node-html-markdown";
import ReactDOMServer from "react-dom/server";
import { mkfile, task } from "vesic-js";
import * as vite from "vite";

var config = {
  main: {
    src: "./src/**/*.jsx",
    dist: "./README.md",
  },
};

async function main() {
  const server = await vite.createServer();

  const readmeComponent = (await server.ssrLoadModule("./src/README.jsx"))
    .default;
  const renderAsString = ReactDOMServer.renderToString(await readmeComponent());
  const markdown = NodeHtmlMarkdown.translate(renderAsString);

  await server.close();

  mkfile(markdown, { path: config.main.dist });

  console.log("Success!");
}

task({ main });
