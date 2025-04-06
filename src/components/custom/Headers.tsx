import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons for hamburger menu
import logo from "../../assets/logo.png";

function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-32 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["HOME", "ABOUT", "EXPERTISE", "PROJECTS", "CONTACT"].map(
            (item: string) => (
              <div className="relative group" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-gray-700 font-medium transition-all duration-500 ease-in-out group-hover:text-white"
                >
                  {item}
                </a>
                <div className="absolute inset-0 bg-red-800 opacity-0 scale-75 rounded-full transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:scale-100 -z-10"></div>
              </div>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {["HOME", "ABOUT", "EXPERTISE", "PROJECTS", "CONTACT"].map(
            (item: string) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 text-lg font-medium hover:text-red-800 transition-all duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Headers;

{
  /* <div className="border-b border-slate-100 flex justify-between items-center p-4 md:px-16">
  <Link to="/" className="text-xl font-bold">
    <img src={logo} alt="logo" className="max-h-14" />
  </Link>
  <div className="flex gap-4 md:gap-8">
    <>
      <Link to="/home">
        <button
          type="button"
          className="focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium flex items-center gap-2 rounded-lg  px-5 py-2.5 me-2 mb-2 mx-12 text-2xl"
        >
          Home
        </button>
      </Link>
      <Link to="/geneartiveAi">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Generate With AI
        </button>
      </Link>
    </>
  </div>
</div>; */
}
