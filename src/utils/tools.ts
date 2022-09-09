import { useDragStore } from "@/store/drag";

let counter = 1;
const elMap = new WeakMap<object, HTMLElement>();

export const genKey = () =>
  `${counter++}_${(Math.random() * 100000) | 0}${+new Date()}`;

export const setElDom = (key: object, el: HTMLElement) => elMap.set(key, el);
export const getElDom = (key: object) => elMap.get(key);
export const removeElDom = (key: object) => elMap.delete(key);
export const transformDom = (key: object) =>
  getElDom(key) || document.querySelector("html")!;
export const getAllPanelDom = () => {
  const store = useDragStore();
  const objects = store.panels.map((item) => item.identity);
  const allEls = objects.map((obj) => getElDom(obj));
  return allEls || [];
};
