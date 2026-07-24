import { useState } from "react";

export const BasicState = () => {
  const [info, setInfo] = useState({ age: 0 });

  const handleAdd = () => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      age: info.age + 1,
    }));
  };

  return (
    <div>
      {info.age}
      <button onClick={handleAdd}></button>
    </div>
  );
};
