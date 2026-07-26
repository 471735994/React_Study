import React from "react";
export const FormAction = () => {
  const handleAction = (formData: FormData) => {
    console.log([...formData.keys()]);
    console.log([...formData.values()]);
  };

  return (
    <form action={handleAction}>
      <label>
        用户名：
        <input type="text" name="username"></input>
      </label>
      <label>
        <input type="text" name="password"></input>
      </label>
      <button type="submit">登陆</button>
    </form>
  );
};
