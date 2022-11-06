import React, { useState } from "react";
import DND from "./DND";
import FileUpload from "./FileUpload";
import InputField from "./components/InputField";

const UploadBox = () => {
  const [viewbox, setViewBox] = useState();
  const [activeTab,setActive]=useState('HTML');

  const RenderView = () => {};

  return (
    <div className="lg:flex lg:flex-col bg-white p-8  text-center gap-4  shadow-2xl rounded-3xl w-3/6 ">
      {/* Upload bar  */}
      <div className=" flex flex-col items-center justify-center">
        <div className="flex my-5">
         <InputField/>
          
        </div>

        {/* <hr /> */}
        
<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
    <ul className="flex flex-wrap -mb-px items-center justify-center">
        <li className="mr-2">
            <button 
             onClick={() => {
              setActive('HTML')
              setViewBox(() => {
                return (
                  <>
                    <FileUpload />
                  </>
                );
              });
            }}
            className={`inline-block p-4 rounded-t-lg  ${activeTab==='HTML' ? "active text-sky-600 border-b-4 border-sky-600" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"}`}>HTML</button>
        </li>
        <li className="mr-2">
            <button
             onClick={() => {
              setActive('PDF')
              setViewBox(() => {
                return (
                  <>
                    <FileUpload />
                  </>
                );
              });
            }}
             className={`inline-block p-4 rounded-t-lg    ${activeTab==='PDF' ? "active text-sky-600 border-b-4 border-sky-600" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"}` }>PDF</button>
        </li>
        <li class="mr-2">
            <button 
             onClick={() => {
              setActive('Templates')
              setViewBox(() => {
                return (
                  <>
                    <FileUpload />
                  </>
                );
              });
            }}
             className={`inline-block p-4 rounded-t-lg  ${activeTab==='Templates' ? "active text-sky-600 border-b-4 border-sky-600" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"} `}>Templates</button>
        </li>
   
    </ul>
</div>

{/* 
        <div className="p-5  text-center flex space-x-8">
          <button
            className="p-1   hover:bU "
            onClick={() => {
              setViewBox(() => {
                return (
                  <>
                    <FileUpload />
                  </>
                );
              });
            }}
          >
            HTML{" "}
          </button>
          <button
            className="p-1        "
            onClick={() => {
              setViewBox(() => {
                return (
                  <>
                    <FileUpload />
                  </>
                );
              });
            }}
          >
            PDF{" "}
          </button>
          <button
            className="p-1      "
            onClick={() => {
              setViewBox(() => {
                return <>
                <FileUpload/>
                </>;
              });
            }}
          >
            TEMPLATES
          </button>
        </div> */}
      </div>

      {/* ViewBox  */}
      <div>
        
        {viewbox}
      </div>
      
    </div>
  );
};

export default UploadBox;
