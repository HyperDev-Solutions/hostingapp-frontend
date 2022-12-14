import React, { useEffect, useState } from "react";
import DND from "./DND";
import FileUpload from "./FileUpload";
import InputField from "./components/InputField";
import ZipUpload from "./ZipUpload";
// import ZipUpload from "./ZipUpload";

const UploadBox = ({setToast,setErrorMessage}) => {
  const [viewbox, setViewBox] = useState(<FileUpload  setErrorMessage={setErrorMessage} setToast={setToast}/>);
  const [activeTab,setActive]=useState('HTML');

  useEffect(()=>{
    // setViewBox(() => {
    //   return (
    //     <>
    //       <FileUpload  setErrorMessage={setErrorMessage} setToast={setToast}/>
    //     </>
    //   );
    // });
  },[activeTab,viewbox])

  const RenderView = () => {};

  return (
    <div className="lg:flex lg:flex-col bg-white p-8  text-center gap-4  shadow-2xl rounded-2xl  md:w-7/12 w-8/12  ">
      {/* Upload bar  */}
      <div className=" flex flex-col items-center justify-center ">
        <div className="flex my-5">
         <InputField  setToast={setToast} setErrorMessage={setErrorMessage} />
          
        </div>

        {/* <hr /> */}
        
<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-full">
    <ul className="flex flex-wrap -mb-px items-center justify-center">
        <li className="mr-2">
            <button 
             onClick={() => {
              setActive('HTML')
              setViewBox(() => {
                return (
                  <>
                    <FileUpload  setErrorMessage={setErrorMessage} setToast={setToast}/>
                  </>
                );
              });
            }}
            className={`inline-block p-4 rounded-t-lg  ${activeTab==='HTML' ? "active text-sky-600 border-b-4 border-sky-600" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"}`}>HTML</button>
        </li>
        <li className="mr-2">
            <button
             onClick={() => {
              setActive('ZIP')
              setViewBox(() => {
                return (
                  <>
                    <ZipUpload setErrorMessage={setErrorMessage} setToast={setToast}/>
                  </>
                );
              });
            }}
             className={`inline-block p-4 rounded-t-lg    ${activeTab==='ZIP' ? "active text-sky-600 border-b-4 border-sky-600" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"}` }>ZIP</button>
        </li>
           {/* <li class="mr-2">
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
    */}
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
