import { use } from "react";

export const Message = ({ myPromise }: { myPromise: Promise<string> }) => {
  const message = use(myPromise);
  return <div>{message}</div>;
};
