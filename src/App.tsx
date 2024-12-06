import React from "react";
import "./App.css";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PreRoutes from "./Routes/PreRoutes";
import { useAuth } from "./Helpers/AuthHelper";



function App() {
  let login =false;
  const auth = useAuth()    
  if(!(auth.token === "")) 
  {
    login= true;
  }
  
  return (
    <>
    {login ? <PrivateRoutes/>:<PreRoutes/>}
    </>
  );
}

export default App;
