import React from "react";
import "./index.css";
import Navbar from "./componants/Navbar";
import Home from "./componants/Home";


function App() {
  return (
    <>
    <div className="flex">
      <Navbar />
      <Home/>
      </div>
    </>
  );
}

export default App;
