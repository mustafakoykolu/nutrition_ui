import React from "react";
import "./App.css";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PreRoutes from "./Routes/PreRoutes";
import { useAuth } from "./Helpers/AuthHelper";
import AxiosInterceptor from "./AxiosInterceptor";



function App() {
  const auth = useAuth()   
  AxiosInterceptor(auth.token) 
  return (
    <>
    {auth.token !=="" ? <PrivateRoutes/>:<PreRoutes/>}
    </>
  );
}

export default App;
