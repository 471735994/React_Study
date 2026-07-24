import type React from "react";
import { useState } from "react";

interface HellowWorldProps {
  title: string;
  render?: (count: number) => React.ReactNode;
}

export const HellowWorld = (props: HellowWorldProps) => {
  const { title, render } = props;
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <h1>
      Hello World + {title} + {render?.(count)}+{count}+
      <button onClick={handleAdd}></button>
    </h1>
  );
};
