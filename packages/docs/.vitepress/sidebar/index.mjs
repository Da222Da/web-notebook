import es from "./es.mjs";
import node from "./node.mjs";

const home = {
  items: [
    {
      text: "基础知识",
      collapsed: false,
      items: [
        {
          text: "ECMAScript 语法标准",
          items: [
            {
              text: "ES 官方标准",
              base: "/es/",
              link: "index",
            }
          ]
        },
        {
          text: "工程化",
          items: [{ text: "Webpack" }, { text: "Rollup" }],
        },
      ],
    },
    {
      text: "运行时环境",
      collapsed: false,
      items: [
        {
          text: "浏览器(Browser)",
        },
        {
          text: "服务端(NodeJS)",
          base: "/node/",
          link: "index",
        },
      ],
    },
    {
      text: "应用开发",
      collapsed: false,
    },
  ],
};

export default {
  "/": home,
  "/es/": es,
  "/node/": node,
};
