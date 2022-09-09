import { INormalFn } from "@/types";

/**
 * @author lihh
 * @description 发布订阅
 */

// 表示订阅池
const subscribe: Record<string, INormalFn[]> = {};

const on = (keyName: string, fn: INormalFn) => {
  const arr = subscribe[keyName] || (subscribe[keyName] = []);
  if (~arr.indexOf(fn)) return;

  arr.push(fn);
};

const off = (keyName: string, fn?: INormalFn) => {
  if (typeof fn !== "function") {
    Reflect.deleteProperty(subscribe, keyName);
    return;
  }

  const arr = subscribe[keyName] || (subscribe[keyName] = []);
  if (!arr.length) return;

  subscribe[keyName] = arr.filter((f) => f !== fn && f.l !== fn);
};

const once = (keyName: string, fn: INormalFn) => {
  const newFn: INormalFn = (...args: any[]) => {
    fn(...args);
    off(keyName, fn);
  };
  newFn.l = fn;
  on(keyName, newFn);
};

const emit = <T = any>(keyName: string, ...args: T[]) => {
  const arr = subscribe[keyName] || (subscribe[keyName] = []);
  if (!arr.length) return;

  arr.forEach((fn) => fn(...args));
};

const emitter = {
  on,
  off,
  once,
  emit
};

export { emitter };
