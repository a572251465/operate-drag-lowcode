import { createApp } from "vue";
import App from "./App.vue";

// 引入共同的样式
import "@/assets/css/reset.css";
import "assets/css/theme.css";
import { elementPlus } from "@/plugin/element-plus";

createApp(App).use(elementPlus).mount("#app");
