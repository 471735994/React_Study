import { useLocalStorageState } from "./UseLocalStorageState";

export const CustomHooks = () => {
  const [count, setCount] = useLocalStorageState("count", 0);

  return (
    <div>
      <h1>自定义Hook</h1>
      <p>当前计数：{count}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        减少
      </button>
    </div>
  );
};
