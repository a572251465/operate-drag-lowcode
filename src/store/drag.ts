import { defineStore } from "pinia";
import { IBasisComponent, IPanelField } from "@/types";
import { genKey, panelDefaultSize, removeElDom } from "@/utils";

interface IDragStore {
  panels: IPanelField[];
}

export const useDragStore = defineStore("dragStore", {
  state: () => {
    return {
      panels: []
    } as IDragStore;
  },

  actions: {
    /**
     * @author lihh
     * @description 添加panel 容器
     * @param left 距离左侧的距离
     * @param top 距离顶部的距离
     */
    addPanel(left: number, top: number) {
      const id = genKey();

      const panelInfo = {
        id,
        type: IBasisComponent.PANEL_COMPONENT,
        identity: { id },
        width: panelDefaultSize.width,
        height: panelDefaultSize.height,
        left,
        top
      } as IPanelField;
      this.panels.push(panelInfo);
    },

    /**
     * @author lihh
     * @description 设置元素的选中状态
     * @param isFocus 是否选中
     */
    settingFocus(isFocus: boolean) {
      this.panels.forEach((item) => (item.isFocus = isFocus));
    },

    /**
     * @author lihh
     * @description 对panel 进行编辑
     * @param id 主键id
     * @param panelInfo 表示panel 信息
     */
    editPanel(id: string, panelInfo: Partial<IPanelField>) {
      const index = this.panels.findIndex((item) => item.id === id);
      if (!~index) return;

      if (panelInfo.isFocus === true) this.settingFocus(false);

      this.panels[index] = Object.assign({}, this.panels[index], panelInfo);
    },

    /**
     * @author lihh
     * @description 将panel 进行删除
     * @param id panel id
     */
    removePanel(id: string) {
      const index = this.panels.findIndex((item) => item.id === id);
      if (!~index) return;

      const panelInfo = this.panels[index];
      this.panels.splice(index, 1);

      removeElDom(panelInfo.identity);
      const identity = panelInfo.component?.identity;
      if (identity) removeElDom(identity);
    }
  }
});
