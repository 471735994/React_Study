// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
import { useTheme } from "./useTheme";

export const GrandChild = () => {
  const theme = useTheme();
  return <div>GrandChild {theme}</div>;
};
