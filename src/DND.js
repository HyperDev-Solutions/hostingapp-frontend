import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";
import Callback from "./Callback";
// import

function DND() {

  
  const [url , setURL ] = useState(false);

  function getCode() {
    //     const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("code")
    const query = new URLSearchParams(window.location.search);
    console.log(query);

    const token = query.get("code");
    console.log(token);

    var api = fetch("http://localhost:8000/api/deploy/auth/authGoogleUrl")
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

        async function handleSubmit(acceptedFiles) {
          const data = new FormData();
          console.log(acceptedFiles);

          for (const file of acceptedFiles) {
            console.log("file", file);
            for (const file of acceptedFiles) {
              data.append("files[]", file, file.name);
            }
            // data.append("files", file);
          }
          data.append("accessToken", accessToken);  

          const pid= localStorage.getItem("projectID");

            // console.log(pi)

          data.append("projectName", pid);
          console.log(data);

          var api = await fetch("http://localhost:8000/api/deploy", {
            method: "POST",
            // headers: {
            //   'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'

            // },
            body: data,
          });
          api = await api.json();
          api=api.defaultUrl
          console.log(api.defaultUrl);
          setURL(api)
          // return api;
        }

        handleSubmit(acceptedFiles);

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
    <>
     <div className="bg-white text-black">

    <h1 > 
      { 
      // url==false ?  <div class="loader">  </div> :
      }
       <a href={url}>  {url} </a>
      
      </h1>
 </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
        <button className="p-5 my-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Drag N Drop some files
        </button>
  <a>
   
    
    </a> 

        
      </div>
      {/* <button onClick={getCode}  className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-green-800 border  border-blue-600  rounded-r-lg hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 " type="button"> Sign In with Google </button> */}

     
    </>
  );
}

export default DND;
