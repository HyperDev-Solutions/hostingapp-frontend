import React from 'react'

const InputField = () => {

  function GenerateURL(){
    console.log()
  }
  return (
    <div className="flex">
     <div className="relative w-full">
        <input type="text"  className="block p-2.5 w-full z-20 text-md text-black bg-white rounded-l-lg border-r-gray-100 border-r-2 border border-gray-300 focus:ring-0 focus:border-0 focus:outline-2 focus:outline-blue-600" placeholder="link-name" />
    </div>
    <button   className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-blue-600 bg-white border border-blue-600  rounded-r-lg hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 " type="button">.tinny.site <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
   
 

    
    <button  onClick={GenerateURL} className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-blue-600 bg-white border border-blue-600  rounded-r-lg hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 " type="button"> Generate URL 
    </button>
   

  

   
</div>
  )
}

export default InputField