import { lazy, Suspense } from "react";
const SuspenseChild = lazy(() => import("./Child"));
export const SuspenseDemo = () => {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <SuspenseChild />
      </Suspense>
    </div>
  );
};
