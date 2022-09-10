import { IPanelField } from "@/types";
import { useDragStore } from "@/store/drag";

export const useEditMove = () => {
  let currentPanel: IPanelField;
  // 表示当前位置信息
  const currentPosInfo = {
    startX: 0,
    startY: 0,
    left: 0,
    top: 0
  };
  const store = useDragStore();

  const move = (e: MouseEvent) => {
    requestAnimationFrame(() => {
      // 鼠标移动的位置
      const endX = e.clientX;
      const endY = e.clientY;

      // 鼠标当前位置 比 开始位置 差多少
      const diffX = endX - currentPosInfo.startX;
      const diffY = endY - currentPosInfo.startY;

      store.editPanel(currentPanel.id, {
        left: diffX + currentPosInfo.left,
        top: diffY + currentPosInfo.top
      });
    });
  };

  const mouseDown = (e: MouseEvent, panelInfo: IPanelField) => {
    // 取消默认事件
    e.preventDefault();
    e.stopPropagation();
    const { clientX, clientY } = e;
    // 记录下 鼠标按下的位置
    currentPosInfo.startX = e.clientX;
    currentPosInfo.startY = e.clientY;

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
  };

  return {
    mouseDown
  };
};
