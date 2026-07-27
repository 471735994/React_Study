// import { useState } from "react";
import "./App.css";
// import { HellowWorld } from "./components/1.HelloWorld";
// import { BasicState } from "./components/2.BasicState";
// import { List } from "./components/3.List";
// import { Hooks } from "./components/4.Hooks";
// import { FormAction } from "./components/5.Form";
// import { SuspenseDemo } from "./components/6.Suspense/SuspenseDemo";
// import { SuspenseNew } from "./components/7.SuspenseNew/SuspenseNew";
import { UseReducer } from "./components/8.UseReducer/UserReducer";

function App() {
  // const [isShow, setIsShow] = useState(true);
  // const handleClick = () => {
  //   setIsShow(!isShow);
  // };

  return (
    <>
      <UseReducer />
      {/* <SuspenseNew /> */}
      {/* <FormAction /> */}
      {/* <HellowWorld
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
      <button onClick={handleClick}>控制Hooks显示与隐藏</button> */}
    </>
  );
}

export default App;
