import React from "react";

import DND from "./DND";
const FileUpload = ({setToast,setErrorMessage}) => {
  return (
    <div className=" flex flex-col items-center p-8 border-dashed border-2 border-gray-[#fafafa] text-gray-500  rounded-xl bg-[#fafafa]">
      {/* Folder Icons  */}
      <DND  setErrorMessage={setErrorMessage} setToast={setToast}/>
    
      
      
        {/* <h1>Folder Icon</h1>
        <h1>Folder Icon</h1> */}
        {/* <hr /> */}
    
      
      
     
    
    </div>
  );
};

export default FileUpload;
