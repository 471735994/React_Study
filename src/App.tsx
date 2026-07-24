import "./App.css";
import { HellowWorld } from "./components/1.HelloWorld";
import { BasicState } from "./components/2.BasicState";
import { List } from "./components/3.List";

function App() {
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
    </>
  );
}

export default App;
