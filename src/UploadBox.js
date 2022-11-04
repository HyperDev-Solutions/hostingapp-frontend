import React, { useState } from "react";
import DND from "./DND";
import FileUpload from "./FileUpload";

const UploadBox = () => {
  const [viewbox, setViewBox] = useState();

  const RenderView = () => {};

  return (
    <div className="lg:flex lg:flex-col bg-white p-10  text-center items-center shadow-2xl rounded-3xl  w-2/5">
      {/* Upload bar  */}
      <div className=" flex flex-col ">
        <div className="flex m-5">

          
        </div>

        <hr />

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
        </div>
      </div>

      {/* ViewBox  */}
      <div>
        
        {viewbox}
      </div>
      
    </div>
  );
};

export default UploadBox;
