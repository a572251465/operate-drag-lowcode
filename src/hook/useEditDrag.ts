import { IBasisComponent } from "@/types";
import { ROOT_CANVAS_CONTAINER, transformDom } from "@/utils";
import { useDragStore } from "@/store/drag";
import { ElMessage } from "element-plus";

export const useEditorDrag = () => {
  let currentType: IBasisComponent;

  // 进去元素 添加一个移动的标识
  const dragEnter = (e: DragEvent) => {
    e.dataTransfer!.dropEffect = "move";
  };
  // 目标经过元素 必须要阻止默认行为，否则不能触发drop
  const dragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  // 离开目标元素时
  const dragLeave = (e: DragEvent) => {
    e.dataTransfer!.dropEffect = "none";
  };

  // 松手时 根据拖拽的组件 添加一个组件
  const drop = (e: DragEvent) => {
    // 判断是否是panel
    if (currentType === IBasisComponent.PANEL_COMPONENT) {
      const useDrag = useDragStore();
      useDrag.addPanel(e.offsetX, e.offsetY);
      return;
    }
    ElMessage.error("组件只能放到容器上");
  };

  /**
   * @author lihh
   * @description 拖拽开始方法
   * @param e 拖拽的元素
   * @param type 拖拽的类型
   */
  const dragStart = (e: MouseEvent, type: IBasisComponent) => {
    const editorRef = transformDom(ROOT_CANVAS_CONTAINER);
    currentType = type;

    // 添加事件
    editorRef.addEventListener("dragenter", dragEnter);
    editorRef.addEventListener("dragover", dragOver);
    editorRef.addEventListener("dragleave", dragLeave);
    editorRef.addEventListener("drop", drop);
  };

  /**
   * @author lihh
   * @description 拖拽结束
   */
  const dragEnd = () => {
    const editorRef = transformDom(ROOT_CANVAS_CONTAINER);

    editorRef.removeEventListener("dragenter", dragEnter);
    editorRef.removeEventListener("dragover", dragOver);
    editorRef.removeEventListener("dragleave", dragLeave);
    editorRef.removeEventListener("drop", drop);
  };
  return { dragStart, dragEnd };
};
