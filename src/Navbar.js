import React, { useState } from "react";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
    
      <nav className="flex  p-2 bg-[#fafafa] flex-wrap items-center justify-center text-base md:ml-auto">
        <a className="mr-5 font-semibold hover:text-gray-900">
          ☆ Hosted 100,000+ links
        </a>
      </nav>


      <div className="flex items-center justify-between  py-8 lg:hidden md:hidden">
      <a href="/">
        <img src="https://tiiny.host/assets/logo.png"  height="130"  width="130" className="" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e" height={40} width={40}/>
            {/* <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span> */}
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>  
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/blog">Blog</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Faq">Faq</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Pricing  </a>
              </li>
              <div className="lg:w-2/5 inline-flex lg:justify-end space-x-1  ml-5 lg:ml-0">
            <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none font-medium   text-base mt-4 md:mt-0 hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">
              Log in
            </button>
            <button class="inline-flex items-center  border-2 font-medium border-solid border-[#bc67ec]  px-2 h-8 focus:outline-none text-[#bc67ec] rounded text-sm mt-4 md:mt-2">
              Sign up free
            </button>
          </div>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU  space-x-8 lg:flex hidden">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>

      <header className="text-gray-600 body-font hidden  md:flex">
        <div className="container mt-4 md:flex flex-wrap px-2 py-5  md:flex-row sm:flex-row sm:justify-center text-xs justify-center ">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            
            <a className="mr-5 text-lg text-gray-900 text-md hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">Blog</a>
            <a className="mr-5 text-lg text-gray-900 text-md hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">FAQ</a>
            <a className="mr-5 text-lg text-gray-900 text-md hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">Pricing</a>
          </nav>
            <img src="https://tiiny.host/assets/logo.png" alt="logo" height="130"  width="130"/>
          <div className="lg:w-2/5 inline-flex lg:justify-end space-x-1  ml-5 lg:ml-0">
            <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none font-medium   text-base mt-4 md:mt-0 hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">
              Log in
            </button>
            <button class="inline-flex items-center  border-2 font-medium border-solid border-[#bc67ec]  px-2 h-8 focus:outline-none text-[#bc67ec] rounded text-sm mt-4 md:mt-2">
              Sign up free
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
