const Navbar = () => {
  return (
    <div className="flex flex-row items-center w-full justify-center">
      <h1 className="text-clrPrimaryRed justify-start">
        UNDA<span className="text-clrText">.Quest</span>
      </h1>
      <nav className="flex flex-row items-center space-x-36 mx-auto">
        <a href="#" className="">
          About Us
        </a>
        <a href="#" className="">
          Our Project
        </a>
        <a href="#" className="">
          Contact
        </a>
        <a href="#" className="">
          Resources
        </a>
      </nav>
      <button className="text-clrPrimaryRed px-8 py-2 border-clrPrimaryRed border-2 rounded-xl bg-transparent">
        Sign Up
      </button>
    </div>
  )
}

export default Navbar
