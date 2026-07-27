import { useReducer } from "react";
const initialState = { name: "heli", age: 18 };
type Action =
  | { type: "changeName"; payload: string }
  | { type: "changeAge"; payload: number };

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.payload };
    case "changeAge":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [info, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>info:{info.name}</p>
      <p>info:{info.age}</p>
      <input
        value={info.name}
        onChange={(ev) =>
          dispatch({ type: "changeName", payload: ev.target.value })
        }
      ></input>
      <input
        value={info.age}
        onChange={(ev) =>
          dispatch({ type: "changeAge", payload: Number(ev.target.value) })
        }
      ></input>
    </div>
  );
};
