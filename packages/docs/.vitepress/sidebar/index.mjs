import es from "./es.mjs";
import node from "./node.mjs";

const home = {
  items: [
    {
      text: "JS 基础知识",
      collapsed: false,
      items: [
        {
          text: "ES 语法标准",
          base: "/es/",
          link: "index",
        },
        {
          text: "运行时环境",
          items: [
            {
              text: "浏览器(Browser)",
            },
            {
              text: "NodeJS",
              base: "/node/",
              link: "index",
            },
          ],
        },
        {
          text: "工程化",
          items: [{ text: "Webpack" }, { text: "Rollup" }],
        },
      ],
    },
    {
      text: "网页开发",
      collapsed: false,
    },
  ],
};
export default {
  "/": home,
  "/es/": es,
  "/node/": node,
};
