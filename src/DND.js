import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function DND() {
  const onDrop = useCallback((acceptedFiles) => {
    // sending this file as an array

    const body = {
      accessToken:
        "ya29.a0AeTM1ic5_NnXnajtTZcX2hxdG-AjcM0wOi6Qzzxydmom_Ihjm09y5K046uvuoeUfeJ4QT3hTutOmc4Ui8fqwrc33YbxMGA57eizan7qV99BHWJIY7uoCRO3iFxmOigBVOmgImyiv_3e5F4O_cmdaZjVCmaY6aCgYKAdASARMSFQHWtWOmCHSGxYwiLk8_27xuBUqVZA0163",
      projectName: "firedeploy-b77cd",
      // files: data,
    };

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log("READING");

        function handleSubmit(acceptedFiles) {
          const data = new FormData();
          console.log(acceptedFiles)

          for (const file of acceptedFiles) {
            console.log("file" ,file)

            data.append("files", file);
          }
          data.append(
            "accessToken",
            "Bearer ya29.a0AeTM1id8oJ9ZrCy4HuZOTSOpMepzp4UZ85RHM6iD3cBn_uzxPvZ69PDm8xIRhUzTbIZ3OqRwQE2A3o2lXNqHxus__yb0yfxlt2B5_IWmEH_prbqSbCs1uX97yjcsVf7DNyjNNz1a2jX-q3FXtLBOhdBV0op4aCgYKAXMSARMSFQHWtWOm-SI__5BuU4VLB8ipPUs4Rw0163"
          );

          data.append("projectName", "firedeploy-b77cd");
          console.log(data);

          return fetch("http://localhost:8000/api/deploy", {
            method: "POST",
            headers: {
              'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
              
            },
            body:data,


            // body: JSON.stringify({
            // accessToken:
            //   "ya29.a0AeTM1icLsd3ThprNAct7B51EjazJeVEBq4Ai93wg5LTcuFP7Djemq9RtyCrMSROs9x9bSaSlp4KCCNlva-ddgKEV8rbcC5sRj518wacPjd1hkQGKzn0jr2HK-MsXhtioBUZwYhDAzC-FmhGtoq4WY5_DeSE-aCgYKAQQSARMSFQHWtWOmCrndVgJym6VrjwjMpo81sA0163",
            // projectName: "firedeploy-b77cd",
            // files: data,
            // }),
          });
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
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
        <button className="p-5 my-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Drag N Drop some files
        </button>
      </div>
    </>
  );
}

export default DND;
