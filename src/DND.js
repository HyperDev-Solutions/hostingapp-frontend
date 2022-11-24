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

const URL = process.env.REACT_APP_BASE_URL


function DND({ setToast, setErrorMessage, setAcceptedFiles, filetype, qty , multiple }) {



  function getCode() {
    //     const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("code")
    const query = new URLSearchParams(window.location.search);
  

    const token = query.get("code");
  

    var api = fetch(`${URL}/deploy/auth/authGoogleUrl`)
      .then((res) => res.text())
      .then((re) => window.location.replace(re))
      .catch((e) => {
        console.log(e);
      });

   
  }

  const onDrop = useCallback((acceptedFiles) => {
    // sending this file as an array
    console.log("========dropeed==========")
    const tokens = JSON.parse(localStorage.getItem("auth"));
    console.log("tokens", tokens)
    const accessToken = tokens.access_token;
    const pid = localStorage.getItem("projectID");
    console.log("tokens.access_token", pid);

    if (!pid) {
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
        setAcceptedFiles(acceptedFiles);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop , multiple });

  return (
    <div className="w-full cursor-pointer">
      {/* {loading} */}

      <div className="bg-white text-black">


      </div>
      <section style={{ border: "1px dotted silver", height: "20vh" }}>
        <div  {...getRootProps({ className: 'dropzone' })} style={{ height: "20vh", zIndex: 1 }} >
          <input {...getInputProps()} />



          <p>
            <div className="flex justify-center flex-col mt-4 gap-y-4 items-center">
              <span className="text-sm">Drag & drop {qty} <br></br>
                {filetype} here</span>
            </div>
            <div style={{ marginTop: "10px" }} className="flex justify-center -mt-5 space-x-4">
              <figure>
                <img alt="" src={p2} className='z-auto object-scale-down contrast-0 h-16 py-2' />
              </figure>
              <div className="border-solid border-0 border-r-2 h-16 border-gray-200"></div>

              <figure>
                <img alt="" src={p1} className='object-scale-down contrast-0 py-2  h-16' />
              </figure>
            </div>
          </p>
        </div>
      </section>
    </div>
  );
}

export default DND;
