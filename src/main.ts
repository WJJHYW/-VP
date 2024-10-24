/*
 * @Author: hyw456 github 1819249230@qq.com
 * @Date: 2024-10-24 10:21:52
 * @LastEditors: hyw456 github 1819249230@qq.com
 * @LastEditTime: 2024-10-24 10:38:25
 * @FilePath: \模板VP\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
