import React from "react";
import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import Main from "./containers/Main";

function App() {
  return (
    <>
        <div className="relative container mx-auto justify-center min-h-screen items-center bg-clrBackgroundPrimary text-clrText font-poppins ">
      <Navbar />
      <Hero />
      <Main/>
    </div>
    </>
  );
}

export default App;
