import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";
import Callback from "./Callback";
import Toast from "./components/feedback/Toast";
import p1 from '../src/unknown.png'
import p2 from '../src/soem.png'
// import

const URL=process.env.REACT_APP_BASE_URL


function DND({setToast,setErrorMessage,setAcceptedFiles}) {

 

  function getCode() {
    //     const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("code")
    const query = new URLSearchParams(window.location.search);
    console.log(query);

    const token = query.get("code");
    console.log(token);

    var api = fetch(`${URL}/deploy/auth/authGoogleUrl`)
      .then((res) => res.text())
      .then((re) => window.location.replace(re))
      .catch((e) => {
        console.log(e);
      });

    // const params = window.location.search
    // console.log(params)
    // let code = params.get("code");
    // console.log(code);
  }

  const onDrop = useCallback((acceptedFiles) => {
    // sending this file as an array

    const tokens = JSON.parse(localStorage.getItem("auth"));
    console.log("tokens.access_token" , tokens.access_token);
    const accessToken=tokens.access_token;
    const pid= localStorage.getItem("projectID");
    
    if(!pid){
      setToast(true);
      setErrorMessage("Please create a firebase Project linked with your google Account");
      return;
    }
    
    


    // const body = {
    //   accessToken: access_token,
    //   projectName: "firedeploy-b77cd",
    //   // files: data,
    // };

    acceptedFiles.forEach((file) => {
      
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {

        
     
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log("READING");

       

        setAcceptedFiles(acceptedFiles);

        // fetch("https://localhost:8000/api/deploy", {
        //   method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        //   body: JSON.stringify(body),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log("Success:", data);
        //   })
        //   .catch((error) => {
        //     console.error("Error:", error);
        //   });

        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="w-full cursor-pointer">
      {/* {loading} */}
      
     <div className="bg-white text-black">
     
  
 </div>
      <div  {...getRootProps()}>
        <input {...getInputProps()} />

        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
        <button className="opacity-0 h-0 w-0">
          Drag N Drop some files
</button>
 </div>  
           
            <div className="flex justify-center -mt-5 space-x-4">
           <figure>
           <img  src={p2}  className='z-auto object-scale-down contrast-0 h-16 py-2'/>
            </figure>
            <div className="border-solid border-0 border-r-2 h-16 border-gray-200"></div>

            <figure>
            <img  src={p1}  className='object-scale-down contrast-0 py-2  h-16'/>
            </figure>
            </div>

            <div className="flex justify-center flex-col mt-4 gap-y-4 items-center">
              <span className="text-sm">Drag & drop multiple <br></br> or single files here</span>
              {/* <button  className="text-gray-500 hover:text-white border px-0.5 border-gray-400 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm text-center mr-2 mb-2 w-1/6 py-1 ">Upload file</button>
              <p className="text-gray-500">Or <span className="font-medium underline">use an example</span></p> */}
            </div>

            
         
          {/* <div className="border border-gray-200 p-6 rounded-lg">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Filename - {filename}
                    </h2>
                   
                  </div> */}


         {/* {filenames.map((val,index)=>{
           return (
             <>
             <h1 key={index+ 1 }> 
             {val} 
             </h1>
            </>
          )
         })} */}
      {/* <button onClick={getCode}  className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-green-800 border  border-blue-600  rounded-r-lg hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 " type="button"> Sign In with Google </button> */}

     
    </div>
  );
}

export default DND;
