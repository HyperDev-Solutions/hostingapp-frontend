import React from "react";
import p1 from '../src/unknown.png'
import p2 from '../src/soem.png'
import DND from "./DND";
const FileUpload = () => {
  return (
    <div className=" flex flex-col items-center p-8 border-dashed border-2 border-gray-[#fafafa] text-gray-500  rounded-xl bg-[#fafafa]">
      {/* Folder Icons  */}
      <div className="flex   space-x-4">


        <figure>
        
    <img  src={p2}  className='object-scale-down contrast-0 h-12 py-2'/>
        </figure>
      <div className="border-solid border-0 border-r-2 h-12 border-gray-200"></div>

<figure>
    <img  src={p1}  className='object-scale-down contrast-0 py-2  h-12'/>
        </figure>
      
      
        {/* <h1>Folder Icon</h1>
        <h1>Folder Icon</h1> */}
        <hr />
      </div>
        <DND/>
      <p className="p-5">
         Drag & drop  single or multiple files  here
      </p>
      <div className="p-5">
      </div>
    </div>
  );
};

export default FileUpload;
