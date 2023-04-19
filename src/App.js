import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/component/page/main/Home";
import { AuthContextProvider } from "./component/context/contextAPI";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
