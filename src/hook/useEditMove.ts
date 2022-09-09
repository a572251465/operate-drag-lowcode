import { IPanelField } from "@/types";
import { getElDom } from "@/utils";
import { useDragStore } from "@/store/drag";

export const useEditMove = () => {
  let currEl: HTMLDivElement;
  let currentPanel: IPanelField;
  const posInfo = {
    left: 0,
    top: 0
  };

  const move = (e: MouseEvent) => {
    requestAnimationFrame(() => {
      const endX = e.offsetX;
      const endY = e.offsetY;

      const diffX = endX - posInfo.left;
      const diffY = endY - posInfo.top;

      const store = useDragStore();
      store.editPanel(currentPanel.id, {
        left: diffX + currentPanel.left,
        top: diffY + currentPanel.top
      });
    });
  };

  const mouseDownHandle = (panelInfo: IPanelField) => {
    currEl = getElDom(panelInfo.identity)!;
    currentPanel = panelInfo;

    posInfo.left = panelInfo.left;
    posInfo.top = panelInfo.top;

    currEl.addEventListener("mousemove", move);
  };

  const mouseUpHandle = () => {
    currEl.removeEventListener("mousemove", move);
  };

  return {
    mouseDownHandle,
    mouseUpHandle
  };
};
