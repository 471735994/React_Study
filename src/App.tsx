import { useState } from "react";
import "./App.css";
import { HellowWorld } from "./components/1.HelloWorld";
import { BasicState } from "./components/2.BasicState";
import { List } from "./components/3.List";
import { Hooks } from "./components/4.Hooks";

function App() {
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <HellowWorld
        title="Hello World123"
        render={(count) => <div>123+{count}</div>}
      />
      <HellowWorld
        title="Hello World123"
        render={(count) => <div>123+{count}</div>}
      />
      <BasicState />
      <List />

      {isShow && <Hooks />}
      <button onClick={handleClick}>控制Hooks显示与隐藏</button>
    </>
  );
}

export default App;
