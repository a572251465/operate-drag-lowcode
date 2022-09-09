import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  PropType,
  ref
} from "vue";
import "./index.less";
import { IPanelField } from "@/types";
import { useEditMove } from "@/hook/useEditMove";
import { setElDom } from "@/utils";

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
    const { mouseDownHandle, mouseUpHandle } = useEditMove();
    // 表示block ref
    const blockRef = ref<HTMLDivElement>();

    onMounted(() => {
      // 给WeakMap 中设置元素
      setElDom(props.panelInfo?.identity, blockRef.value!);
    });

    return () => (
      <div
        class="chart-item panelBk"
        ref={blockRef}
        onMouseup={mouseUpHandle}
        onMousedown={() => mouseDownHandle(props.panelInfo)}
        style={styles.value}></div>
    );
  }
});
