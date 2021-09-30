import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useEagerConnect } from "hooks/useEagerConnect";
import Home from "components/Home";

function App() {
  useEagerConnect();
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
        }}
      />
      <div className="">
      <Home />
    </div>
    </>
  );
}

export default App;