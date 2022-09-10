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
import BlockResize from "../BlockResize";
import { useDragStore } from "@/store/drag";

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
    const { mouseDown } = useEditMove(() => {
      store.editPanel(props.panelInfo!.id, { isFocus: false });
    });
    // 表示block ref
    const blockRef = ref<HTMLDivElement>();
    const store = useDragStore();

    /**
     * @author lihh
     * @description 表示mouse down 前置处理
     * @param e 鼠标事件
     * @param panelInfo panel 容器信息
     */
    const beforeMouseDown = (e: MouseEvent, panelInfo: IPanelField) => {
      mouseDown(e, panelInfo);

      store.editPanel(props.panelInfo!.id, { isFocus: true });
    };

    onMounted(() => {
      // 给WeakMap 中设置元素
      setElDom(props.panelInfo?.identity, blockRef.value!);
    });

    return () => (
      <div
        class="chart-item panelBk"
        ref={blockRef}
        onMousedown={(e) => beforeMouseDown(e, props.panelInfo)}
        style={styles.value}>
        {/* 渲染需要拖拽的点  */}
        {props.panelInfo?.isFocus ? (
          <BlockResize curBlock={props.panelInfo} />
        ) : null}
      </div>
    );
  }
});
