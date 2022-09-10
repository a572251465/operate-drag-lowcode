import type { App } from "vue";
import { ElSwitch, ElTooltip } from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

const components = [ElSwitch, ElTooltip];

const elementPlus = (app: App): App => {
  components.forEach((component) => {
    app.use(component);
  });

  return app;
};

export { elementPlus };
