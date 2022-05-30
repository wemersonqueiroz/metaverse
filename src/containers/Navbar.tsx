const Navbar = () => {
  return (
    <header className="relative flex flex-row items-center w-full justify-center top-0 my-6">
      <h1 className="text-clrPrimaryRed text-xl font-bold absolute left-0">
        UNDA<span className="text-clrText">.Quest</span>
      </h1>
      <nav className="hidden flex-row items-center md:flex md:space-x-3">
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
      <button className="text-clrPrimaryRed absolute right-0 px-8 py-2 border-clrPrimaryRed border-2 rounded-xl bg-transparent">
        Sign Up
      </button>
    </header>
  )
}

export default Navbar
