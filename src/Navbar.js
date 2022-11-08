import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="flex  p-2 bg-[#fafafa] flex-wrap items-center justify-center text-base md:ml-auto">
        <a className="mr-5 font-semibold hover:text-gray-900">
          ☆ Hosted 100,000+ links
        </a>
      </nav>

      <header className="text-gray-600 body-font">
        <div className="container mt-4 flex flex-wrap px-2 py-5 flex-col md:flex-row ">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 text-lg text-gray-900 text-md hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">Blog</a>
            <a className="mr-5 text-lg text-gray-900 text-md hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">FAQ</a>
            <a className="mr-5 text-lg text-gray-900 text-md hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">Pricing</a>
          </nav>
            <img src="https://tiiny.host/assets/logo.png" alt="logo" height="130"  width="130"/>
          <div class="lg:w-2/5 inline-flex lg:justify-end space-x-1  ml-5 lg:ml-0">
            <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none font-medium   text-base mt-4 md:mt-0 hover:border-b-2 hover:border-[#bc67ec] hover:cursor-pointer">
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
