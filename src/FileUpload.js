import React from "react";
import p1 from '../src/unknown.png'
import p2 from '../src/soem.png'
import DND from "./DND";
const FileUpload = () => {
  return (
    <div className=" flex flex-col items-center p-10  text-gray-500  rounded-3xl bg-[#fafafa]">
      {/* Folder Icons  */}
      <div className="flex   space-x-2">


        <figure>

    <img  src={p1}  className='object-scale-down  h-16'/>
        </figure>
        <hr/>
        <figure>
    <img  src={p2}  className='object-scale-down h-16'/>
        </figure>
        {/* <h1>Folder Icon</h1>
        <h1>Folder Icon</h1> */}
        <hr />
      </div>
        <DND/>
      <p className="p-5"> Drag & drop zip or single file here</p>
      <div className="p-5">
        <button className="flex mx-auto text-gray-500 bg-[#fafafa] border-0 py-2 px-8 focus:outline-none  rounded text-lg">
          Button
        </button>
      </div>
      or Use An Example
    </div>
  );
};

export default FileUpload;
