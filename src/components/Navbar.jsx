import React, { useState, useEffect } from "react"; 
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 
  const [activeLink, setActiveLink] = useState(""); 
  const [signinModalVisible, setSigninModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);

  const toggleSigninModal = () => setSigninModalVisible(!signinModalVisible);
  const toggleSignupModal = () => setSignupModalVisible(!signupModalVisible);

  // Function to close Signin and open Signup
  const handleSignUpClick = () => {
    setSigninModalVisible(false); // Close Signin Modal
    setSignupModalVisible(true);  // Open Signup Modal
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) setIsVisible(false);
    else setIsVisible(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (href) => {
    setActiveLink(href); 
  };

  return (
    <>
    <nav
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 left-0 w-full bg-white py-2 text-black border-gray-200 transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="md:px-10 flex flex-wrap items-center justify-between mx-auto py-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          LOGO HERE
        </a>

        {/* Navbar Toggle Button */}
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#00000020] focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <FaBars className="text-black"/>
        </button>

        {/* Navbar Links */}
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:items-center poppins-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0">
            {[
              { name: "Home", href: "#home" },
              { name: "Desk Name Plates", href: "#about", showArrow: true },
              { name: "House Name Plates", href: "#curriculum", showArrow: true },
              { name: "Others", href: "#blogs" },
              { name: "House", href: "#testimonials" }, 
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 font-normal text-black text-base px-3 rounded ${
                    activeLink === link.href
                      ? "nav-active text-blue-800 bg-clip-text"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600"
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                  {link.showArrow && <IoIosArrowDown className="inline ml-1" />}
                </a>
              </li>
            ))}
            
            <li><CiUser className="font-bold text-xl cursor-pointer" onClick={toggleSigninModal}/></li>
            <li><CiShoppingCart className="font-bold text-xl cursor-pointer"/></li>
          </ul>
        </div>
      </div>
    </nav>
    {signinModalVisible && (
        <Signin
          handleSignInModel={toggleSigninModal}
          handleSignUpModel={handleSignUpClick} // Pass the updated function
        />
      )}

      {/* Signup Modal */}
      {signupModalVisible && (
        <Signup
          handleSignUpModel={toggleSignupModal}
          handleSignInModel={toggleSigninModal}
        />
      )}
    </>
  );
}
