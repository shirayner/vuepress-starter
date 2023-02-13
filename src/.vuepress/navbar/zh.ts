import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "后端",
    prefix: "/后端/",
    children: [
      {
        text: "Java",
        link:"java/"
      },
      {
        text: "Mysql",
        link:"mysql/"
      },
    ],
  },
  {
    text: "计算机基础",
    link: "/计算机基础/",
  },
  {
    text: "前端",
    link: "/前端/",
  },
]);
