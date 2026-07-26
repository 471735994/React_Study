import { useEffect, useRef, useState } from "react";

export const Hooks = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    setCount((c) => c + 1);
  };
  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    // 提供数组参数，当count参数变化时，更新网页标题
    document.title = `当前计数：${count}`;
  }, [count]);

  useEffect(() => {
    //不提供数组参数，组件更新时渲染一次
    console.log("组件更新完成！");
  });

  //在开发环境下出现“点击显示/隐藏时执行两次”通常是因为 React 18 的 StrictMode
  // —— 它会在开发模式下故意对组件进行挂载→清理→再次挂载以帮助发现副作用，
  // 因此你会看到 useEffect（包括带空依赖数组的挂载/卸载逻辑）被触发两次。生产环境不会这样做。

  // const mountedRef = useRef(false);
  useEffect(() => {
    // if (mountedRef.current) return;
    // mountedRef.current = true;
    //空数组，在组件挂载时渲染一次，组件卸载时渲染一次
    console.log("组件挂载完成！");
    handleInputFocus(); //组件挂载时自动聚焦输入框
    console.log(inputRef.current); //组件挂载时，有值表示组件已经挂
    return () => {
      console.log("组件卸载完成！");
    };
  }, []);

  return (
    <div>
      <div>当前计数：{count}</div>
      <button onClick={handleAdd}>增加</button>
      <input ref={inputRef}></input>
    </div>
  );
};
