type IElType = HTMLDivElement | HTMLDivElement | Window | Document;
interface IFnType<T extends Event, S = any> {
  (e: T, ...args: S[]): any;
}

export const bindDom = () => {
  let targetFn: IFnType<any>;
  let targetKeyName: string;
  let targetEl: IElType;
  const addEvent = <T extends Event, S>(
    el: IElType,
    keyName: string,
    fn: IFnType<T, S>,
    isFastOff = false
  ) => {
    const transformFn = (e: T) => {
      fn(e);

      if (isFastOff) removeEvent();
    };
    targetFn = transformFn;
    targetKeyName = keyName;
    targetEl = el;
    el.addEventListener(keyName, transformFn as any);
  };

  const removeEvent = () => {
    targetEl.removeEventListener(targetKeyName, targetFn);
  };

  return {
    add: addEvent,
    remove: removeEvent
  };
};
