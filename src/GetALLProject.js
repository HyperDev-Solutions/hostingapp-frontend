import React, { useEffect, useState } from "react";
import Toast from "./components/feedback/Toast";

const URL = process.env.REACT_APP_BASE_URL
const GetALLProject = ({ setToast, setErrorMessage }) => {
  const [state, setState] = useState([]);
  // const [button, setbutton] = useState('Select Project ID');
  const [ProjectID, setProjectId] = useState();



  const tokens = JSON.parse(localStorage.getItem("auth"));
  console.log("tokens.access_token", tokens.access_token);
  const accessToken = tokens.access_token;


  async function CallApi() {
    try {
      const Api = await fetch(`${URL}/deploy/getAllProject`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      if (Api.status >= 400) {
        setToast(true);
        setErrorMessage("Please create a firebase Project linked with your google Account");
      }
      const response = await Api.json();

      console.log("response", response)

    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    CallApi()
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font"></section>

      <h1 className="text-5xl text-center my-32  text-gray-800 font-semibold"   >  MY PROJECTS </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {state.map((val, index) => {
            return (
              <>
                <div className="xl:w-1/3 md:w-1/2 p-4" key={index + 1} >
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      Display Name - {val.displayName}
                    </h2>
                    <p className="leading-relaxed text-base"> Project ID - {val.projectId}</p>
                    <button className="p-5 my-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => {
                      console.log(val.projectId)
                      // localStorage.setItem("projectID", val.projectId)                        

                      // setbutton("Project Id selected")
                    }}> Project ID   </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default GetALLProject;
