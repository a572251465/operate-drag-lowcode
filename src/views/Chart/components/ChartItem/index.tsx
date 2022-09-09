import { computed, CSSProperties, defineComponent, PropType } from "vue";
import "./index.less";
import { IPanelField } from "@/types";

export default defineComponent({
  props: {
    panelInfo: {
      type: Object as PropType<IPanelField>,
      default: {}
    }
  },
  setup(props) {
    const styles = computed<CSSProperties>(() => ({
      width: `${props.panelInfo?.width}px`,
      height: `${props.panelInfo?.height}px`,
      left: `${props.panelInfo?.left}px`,
      top: `${props.panelInfo?.top}px`
    }));

    return () => <div class="chart-item panelBk" style={styles.value}></div>;
  }
});
