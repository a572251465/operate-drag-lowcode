import type { App } from "vue";
import { ElDrawer, ElSwitch, ElTabPane, ElTabs, ElTooltip } from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/assets/css/element-plus.css";

const components = [ElSwitch, ElTooltip, ElDrawer, ElTabs, ElTabPane];

const elementPlus = (app: App): App => {
  components.forEach((component) => {
    app.use(component);
  });

  return app;
};

export { elementPlus };
