import type { App } from "vue";
import { ElSwitch } from "element-plus";
import "element-plus/dist/index.css"

const components = [ElSwitch];

const elementPlus = (app: App): App => {
  components.forEach(component => {
    app.use(component);
  })

  return app;
};

export { elementPlus };
