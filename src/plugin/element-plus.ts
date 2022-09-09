import type { App } from "vue";
import {ElSwitch, ElTooltip} from "element-plus";
import "element-plus/dist/index.css"

const components = [ElSwitch, ElTooltip];

const elementPlus = (app: App): App => {
  components.forEach(component => {
    app.use(component);
  })

  return app;
};

export { elementPlus };
