import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PreRoutes from "./Routes/PreRoutes";



function App() {
  let login =false;
  return (
    <>
    {login ? <PrivateRoutes/>:<PreRoutes/>}
    </>
  );
}

export default App;
