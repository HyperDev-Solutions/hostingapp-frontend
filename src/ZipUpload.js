import React, { useEffect, useState } from "react";
import DND from "./DND";
import p1 from "../src/htmlFileIcon.png";
import ScaleLoader from "react-spinners/ScaleLoader";
import Toast from "./components/feedback/Toast";

const URL = process.env.REACT_APP_BASE_URL;

const ZipUpload = ({ setToast, setErrorMessage }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  let [color, setColor] = useState("");

  const [filename, setfilename] = useState(false);
  const [url, setURL] = useState(false);
  let [loading, setLoading] = useState(false);
  const [value, setvalue] = useState("Generated URL will appear here");
  const [acceptedFiles, setAcceptedFiles] = useState(null);

  useEffect(() => {
    if (acceptedFiles)
      for (const file of acceptedFiles) {
        setfilename(file.name);
      }
  }, [acceptedFiles]);

  const handleClick = (e) => {
    if (!acceptedFiles) {
      setToast(true);
      setErrorMessage("Please import File first");
    } else {
      handleSubmit(acceptedFiles);
    }
  };

  async function handleSubmit(acceptedFiles) {
    setLoading(() => {
      return (
        <>
          <ScaleLoader
            color="blue"
            // loading={loading}
            cssOverride={override}
            size={500}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      );
    });
    const tokens = JSON.parse(localStorage.getItem("auth"));
    console.log("tokens.access_token", tokens.access_token);
    const accessToken = tokens.access_token;
    const data = new FormData();
    console.log(acceptedFiles);

    for (const file of acceptedFiles) {
      console.log("file", file);
      for (const file of acceptedFiles) {
        setfilename(file.name);
        data.append("file", file, file.name);
      }
      // data.append("files", file);
    }

    data.append("accessToken", accessToken);

    const pid = localStorage.getItem("projectID");
    if (!pid) {
      setToast(true);
      setErrorMessage(
        "Please create a firebase Project linked with your google Account"
      );
      setLoading(false);
      return;
    }
    console.log(pid);
    console.log("this is the data we're sending", data);

    data.append("projectName", pid);
    const SITENAME = localStorage.getItem("sitename");
    data.append("siteName", SITENAME);
    console.log(data);

    try {
      var api = await fetch(`${URL}/deploy/zip`, {
        method: "POST",
        // headers: {
        //   'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'

        // },
        body: data,
      });

      if (api.status >= 200 && api.status <400){
          api = await api.json();
    
          api = api.defaultUrl;
          console.log(api.defaultUrl);
          setURL(api);
          setLoading(false);
          let message=await api.json()
          let {msg } =message
          console.log("msg" , msg)
          setErrorMessage(msg)
          setvalue(false);

      }

      if (api.status > 401){
        let message=await api.json()
        let {msg } =message
        console.log("msg" , msg)
        setErrorMessage(msg)
        setToast(true)
        setErrorMessage(msg)
   
        console.log("error")
        setLoading(false);
      }

    } catch (error) {
        setToast(true)
        setErrorMessage("Please upload Zip file")
        let message=await api.json()
        let {msg } =message
        console.log("msg" , msg)
        setErrorMessage(msg)
      // return api;
      setLoading(false);
    //   Toast(true , "Please upload Zip file")
    }
  }
  return (
    <>
      <div className="w-full cursor-pointer">{loading}</div>
      <div className=" flex flex-col items-center p-8 border-dashed border-2 border-gray-[#fafafa] text-gray-500  rounded-xl bg-[#fafafa]">
        {/* Folder Icons  */}
        {filename && !url ? (
          <div className="flex flex-row items-center justify-center  mt-2 mb-4 py-0.5 px-2 gap-x-4 ">
            <span>{filename}</span>
            <img src={p1} className="object-scale-down py-2  h-10" />
          </div>
        ) : (
          <></>
        )}

        {filename && url ? (
          <h1>
            <a className="text-blue-400" href={url}>
              {" "}
              {url}{" "}
            </a>
          </h1>
        ) : (
          <DND
            setAcceptedFiles={setAcceptedFiles}
            setErrorMessage={setErrorMessage}
            setToast={setToast}
          />
        )}

        {/* <h1>Folder Icon</h1>
        <h1>Folder Icon</h1> */}
        {/* <hr /> */}
      </div>
      <button
        onClick={handleClick}
        className="text-white hover:text-white border  border-gray-400 hover:bg-blue-600 bg-blue-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md text-center mr-2 mb-2 mt-4 w-full py-2 px-2"
      >
        Upload
      </button>
    </>
  );
};

export default ZipUpload;
