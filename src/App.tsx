import React, { Suspense } from "react";
import { RouterConfig } from "./router/router";

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="bg-opacity-100 bg-transparent fixed inset-0 min-h-screen flex justify-center items-center z-50">
            {/* <Lottie animation={loader} /> */}
            Lodaing ...
          </div>
        }
      >
        <RouterConfig />
      </Suspense>
      {/* <RouterConfig /> */}
    </>
  );
};

export default App;
