import { useMemo, useState } from "react";

export const Memo = () => {
  const [count, setCount] = useState(0);
  //使用useMemo可以缓存复杂的计算结果，当依赖项，优化性能
  const doubleInfo = useMemo(() => ({ info: count * 2 }), [count]);
  const handleClick = () => {
    setCount(count + 1);
  };

  //   const double = count * 2;
  return (
    <div>
      {doubleInfo.info}
      <div onClick={handleClick}>点击</div>
    </div>
  );
};
