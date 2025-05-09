import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 font-sans font-semibold text-gray-800">
  <div className="container px-12 md:px-20 mx-auto relative lg:text-sm">
    <div className="flex justify-between items-center">
      <div className="flex items-center flex-shrink-0">
        <a href="/" className="flex items-center">
          <img className="h-20 w-21 mr-5" src={logo} alt="Logo" />
          <span className="text-xl tracking-tight">DrugXpert</span>
        </a>
      </div>
      <ul className="hidden lg:flex ml-14 space-x-12 text-[16px]">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex justify-center space-x-12 items-center text-[16px]">
        <a href="https://app.drugxpert.net" className="py-2 px-3 border rounded-md">
          Sign In
        </a>
        <a
          href="https://app.drugxpert.net"
          className="text-white bg-gradient-to-br from-green-600 to-green-900 py-2 px-3 rounded-md"
        >
          Create an account
        </a>
      </div>
      <div className="lg:hidden md:flex flex-col justify-end">
        <button onClick={toggleNavbar}>
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>
    {mobileDrawerOpen && (
      <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="py-4">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-6">
          <a href="https://app.drugxpert.net/auth-page/signin" className="py-2 px-3 border rounded-md">
            Sign In
          </a>
          <a
            href="https://app.drugxpert.net/auth-page/signup"
            className="text-white py-2 px-3 rounded-md bg-gradient-to-br from-green-600 to-green-900"
          >
            Create an account
          </a>
        </div>
      </div>
    )}
  </div>
</nav>

  
  );
};

export default Navbar;
