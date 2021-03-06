import { useState, useRef, useMemo, useCallback } from 'react';

function createKeyObj<T extends { [key: string]: any }>(list: T[], key: keyof T) {
  const obj: { [key: string]: T } = {};
  list.forEach(s => {
    if (s[key]) {
      obj[s[key]] = s;
    }
  });
  return obj;
}

function isUndef(val: any) {
  return val !== undefined;
}

/**
 * 自定义set，可以指定key去重
 * @param initialSet 初始列表
 * @param key 可以标识元素的key值
 */
export default function useKeySet<T extends { [key: string]: any }>(
  initialSet: T[],
  key: keyof T
): [T[], (item: T) => boolean, (item: T) => void, (item: T) => void, () => void] {
  const [set, setSet] = useState(initialSet);
  const keyObjRef = useRef(createKeyObj(set, key));
  const has = useCallback(
    (item: T) => isUndef(item[key]) && isUndef(keyObjRef.current[item[key]]),
    [key]
  );
  const add = useCallback(
    (item: T) => {
      if (!has(item)) {
        keyObjRef.current[item[key]] = item;
        setSet(prev => [...prev, item]);
      }
    },
    [key, has]
  );
  const remove = useCallback(
    (item: T) => {
      if (has(item)) {
        const target = keyObjRef.current[item[key]];
        if (isUndef(target)) {
          delete keyObjRef.current[item[key]];
          setSet(prev => {
            const current = [...prev];
            const idx = current.findIndex(i => i[key] === item[key]);
            if (idx !== -1) {
              current.splice(idx, 1);
            }
            return current;
          });
        }
      }
    },
    [key, has]
  );
  const removeAll = useCallback(() => {
    keyObjRef.current = {};
    setSet([]);
  }, []);

  return [set, has, add, remove, removeAll];
}
