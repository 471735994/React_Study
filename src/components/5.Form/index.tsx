import { useActionState } from "react";
// import { useFormStatus } from "react-dom";

// const SubmitButton = () => <button type="button">提交</button>;
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const FormAction = () => {
  const handleAction = async (previousState: unknown, formData: FormData) => {
    console.log([...formData.keys()]);
    console.log([...formData.values()]);
    console.log(previousState);
    console.log(state);
    await delay(1000);
    return {
      success: true,
      data: {
        username: formData.get("username"),
        password: formData.get("password"),
      },
    };
  };

  //调用 useActionState 后，它会返回一个数组，包含三个关键元素：状态值、触发动作的函数以及是否正在处理中的标识。
  //state: 存储当前的状态数据。
  //submitAction: 一个用来触发 handleAction 的函数。在表单场景中，可以直接把它传给 <form> 标签的 action 属性
  //isPending: 一个布尔值，表示 actionFunction 是否正在执行中。这很适合用来禁用提交按钮或显示加载动画，提升用户体验
  const [state, submitAction, ispending] = useActionState(handleAction, null);

  return (
    <form action={submitAction}>
      <label>
        用户名：
        <input type="text" name="username"></input>
      </label>
      <label>
        <input type="text" name="password"></input>
      </label>
      <button type="submit">{ispending ? "登陆中..." : "登录"}</button>
      {/* <SubmitButton /> */}
    </form>
  );
};
