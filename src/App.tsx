import React from "react"
import Navbar from "./containers/Navbar"
import Hero from "./containers/Hero"

function App() {
  return (
    <div className="relative min-h-screen items-center bg-clrBackgroundPrimary text-clrText font-poppins p-8 mx-8">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
