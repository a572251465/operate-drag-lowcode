import { useDragStore } from "@/store/drag";
import { IPanelField } from "@/types";

let counter = 1;
const elMap = new WeakMap<object, HTMLDivElement>();
// 表示选择的panel id
let selectionPanelId = "";

export const genKey = () =>
  `${counter++}_${(Math.random() * 100000) | 0}${+new Date()}`;

export const setElDom = (key: object, el: HTMLDivElement) => elMap.set(key, el);
export const getElDom = (key: object) => elMap.get(key);
export const removeElDom = (key: object) => elMap.delete(key);
export const transformDom = (key: object) => getElDom(key)!;
export const getAllPanelDom = () => {
  const store = useDragStore();
  const objects = store.panels.map((item) => item.identity);
  const allEls = objects.map((obj) => getElDom(obj));
  return allEls || [];
};
export const getPanelInfo = (id: string): IPanelField | null => {
  const store = useDragStore();
  const panelInfo = store.panels.find((item) => item.id === id);

  if (!panelInfo) return null;
  return panelInfo;
};
export const setSelectionPanel = (id: string) => (selectionPanelId = id);
export const getSelectionPanel = () => selectionPanelId;
