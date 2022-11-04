import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav class="flex  p-2 bg-[#fafafa] flex-wrap items-center justify-center text-base md:ml-auto">
        <a class="mr-5 font-semibold hover:text-gray-900">
          ☆ Hosted 100,000+ links
        </a>
      </nav>

      <header class="text-gray-600 body-font">
        <div class="container  flex flex-wrap p-5 flex-col md:flex-row ">
          <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a class="mr-5 hover:text-gray-900">Blog</a>
            <a class="mr-5 hover:text-gray-900">FAQ</a>
            <a class="mr-5 hover:text-gray-900">Pricing</a>
          </nav>

          <div class="lg:w-2/5 inline-flex lg:justify-end space-x-7  ml-5 lg:ml-0">
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              LOG IN
            </button>
            <button class="inline-flex items-center  border-0 py-1 border-solid border-pink-300 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Sign Up Free
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
