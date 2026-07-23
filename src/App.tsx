import "./App.css";
import { HellowWorld } from "./components/1.HelloWorld";

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
    </>
  );
}

export default App;
