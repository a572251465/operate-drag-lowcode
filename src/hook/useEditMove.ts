import { INormalFn, IPanelField } from "@/types";
import { useDragStore } from "@/store/drag";
import { getElDom, ROOT_CANVAS_CONTAINER } from "@/utils";

export const useEditMove = (callback?: INormalFn) => {
  let currentPanel: IPanelField;
  // 表示requestAnimationFrame flag
  let setupFlag = false;
  // 表示当前位置信息
  const currentPosInfo = {
    startX: 0,
    startY: 0,
    left: 0,
    top: 0
  };
  const store = useDragStore();
  // 表示获取root 元素
  const elDom = getElDom(ROOT_CANVAS_CONTAINER);

  const move = (e: MouseEvent) => {
    // 如果已经在拖拽中不予理会
    if (setupFlag) return;
    setupFlag = true;

    requestAnimationFrame(() => {
      // 鼠标移动的位置
      const endX = e.clientX;
      const endY = e.clientY;

      // 鼠标当前位置 比 开始位置 差多少
      const diffX = endX - currentPosInfo.startX;
      const diffY = endY - currentPosInfo.startY;

      const left = diffX + currentPosInfo.left;
      const top = diffY + currentPosInfo.top;

      store.editPanel(currentPanel.id, {
        left,
        top
      });
      setupFlag = false;
    });
  };

  const mouseDown = (e: MouseEvent, panelInfo: IPanelField) => {
    // 取消默认事件
    e.preventDefault();
    e.stopPropagation();
    const { clientX, clientY } = e;
    // 记录下 鼠标按下的位置
    currentPosInfo.startX = clientX;
    currentPosInfo.startY = clientY;

    currentPanel = panelInfo;

    // 记录下panel block位置
    currentPosInfo.left = panelInfo.left;
    currentPosInfo.top = panelInfo.top;

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", mouseUp);
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", mouseUp);

    if (typeof callback === "function") callback();
  };

  return {
    mouseDown
  };
};
