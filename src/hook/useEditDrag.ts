import { IBasisComponent } from "@/types";
import { getAllPanelDom, ROOT_CANVAS_CONTAINER, transformDom } from "@/utils";
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

  // 表示拖拽到容器之上
  const dragContainerUp = {
    dragEnter: (e: DragEvent) => {
      e.dataTransfer!.dropEffect = "move";

      const el = e.target as HTMLDivElement;
      if (el.classList.contains("chart-item")) {
        el.className = `${el.className} chart-item-over-active`;
      }
    },
    dragOver: (e: DragEvent) => {
      e.preventDefault();
    },
    dragLeave: (e: DragEvent) => {
      e.dataTransfer!.dropEffect = "none";
      removeAssignClassName(e);
    },
    drop: (e: DragEvent) => {
      // 取消默认事件
      e.preventDefault();
      e.stopPropagation();
      removeAssignClassName(e);
    }
  };

  /**
   * @author lihh
   * @description 删除指定的class name
   * @param e dom元素
   */
  const removeAssignClassName = (e: DragEvent) => {
    const el = e.target as HTMLDivElement;
    if (!el.classList.contains("chart-item-over-active")) return;

    el.className = el.className.replace(" chart-item-over-active", "");
  };

  /**
   * @author lihh
   * @description 拖拽开始方法
   * @param e 拖拽的元素
   * @param type 拖拽的类型
   */
  const dragStart = (e: MouseEvent, type: IBasisComponent) => {
    currentType = type;

    // 如果是panel 以及其余容器 绑定事件不同
    if (currentType === IBasisComponent.PANEL_COMPONENT) {
      const editorRef = transformDom(ROOT_CANVAS_CONTAINER);
      // 添加事件
      editorRef.addEventListener("dragenter", dragEnter);
      editorRef.addEventListener("dragover", dragOver);
      editorRef.addEventListener("dragleave", dragLeave);
      editorRef.addEventListener("drop", drop);
    } else {
      const allPanelDom = getAllPanelDom();
      allPanelDom.forEach((el) => {
        el!.addEventListener("dragenter", dragContainerUp.dragEnter);
        el!.addEventListener("dragover", dragContainerUp.dragOver);
        el!.addEventListener("dragleave", dragContainerUp.dragLeave);
        el!.addEventListener("drop", dragContainerUp.drop);
      });
    }
  };

  /**
   * @author lihh
   * @description 拖拽结束
   */
  const dragEnd = () => {
    if (currentType === IBasisComponent.PANEL_COMPONENT) {
      const editorRef = transformDom(ROOT_CANVAS_CONTAINER);

      editorRef.removeEventListener("dragenter", dragEnter);
      editorRef.removeEventListener("dragover", dragOver);
      editorRef.removeEventListener("dragleave", dragLeave);
      editorRef.removeEventListener("drop", drop);
    } else {
      const allPanelEl = getAllPanelDom();
      allPanelEl.forEach((el) => {
        el!.removeEventListener("dragenter", dragContainerUp.dragEnter);
        el!.removeEventListener("dragover", dragContainerUp.dragOver);
        el!.removeEventListener("dragleave", dragContainerUp.dragLeave);
        el!.removeEventListener("drop", dragContainerUp.drop);
      });
    }
  };
  return { dragStart, dragEnd };
};
