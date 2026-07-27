import { Suspense } from "react";
import { Message } from "./Message";

async function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello world!"), 1000);
  });
}

export const SuspenseNew = () => {
  const messagePromise = fetchMessage();
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Message myPromise={messagePromise} />
      </Suspense>
    </div>
  );
};
