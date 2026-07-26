import { useState } from "react";

export const List = () => {
  const [list, setList] = useState<number[]>([]);

  return (
    //React 渲染一个列表时，需要 key 来唯一标识每个元素。
    // 注意：如果 item 可能重复，最好换一个真正唯一的值，比如数组索引组合或 id。
    <div>
      {list.map((item) =>
        item % 2 === 0 ? <div key={item}>{item}</div> : null,
      )}
      <button
        onClick={() => {
          setList([...list, list.length]);
        }}
      >
        追加元素
      </button>
    </div>
  );
};
