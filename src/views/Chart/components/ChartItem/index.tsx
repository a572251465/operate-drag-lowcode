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
import MenuBar from "../MenuBar/index.vue";

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
    const { mouseDown } = useEditMove();
    // 表示block ref
    const blockRef = ref<HTMLDivElement>();
    const store = useDragStore();
    // 表示悬浮flag
    const outFlag = ref<boolean>(false);

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

      if (props.panelInfo?.alignCenter === true) return;
      const { offsetWidth, offsetHeight } = blockRef.value as HTMLDivElement;
      const left = props.panelInfo.left - offsetWidth / 2;
      const top = props.panelInfo.top - offsetHeight / 2;

      store.editPanel(props.panelInfo.id, { left, top, alignCenter: true });
    });

    return () => (
      <div
        class={
          props.panelInfo?.isFocus
            ? "chart-item panelBk chart-item-active"
            : "chart-item panelBk"
        }
        data-id={props.panelInfo?.id}
        ref={blockRef}
        onMouseover={() => (outFlag.value = true)}
        onMouseleave={() => (outFlag.value = false)}
        onMousedown={(e) => beforeMouseDown(e, props.panelInfo)}
        style={styles.value}>
        {/* 渲染需要拖拽的点  */}
        {props.panelInfo?.isFocus ? (
          <BlockResize curBlock={props.panelInfo} />
        ) : null}
        {/* 渲染头部菜单  */}
        <MenuBar panelInfo={props.panelInfo} showFlag={outFlag.value} />
      </div>
    );
  }
});
