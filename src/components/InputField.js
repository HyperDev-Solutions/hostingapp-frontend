import React, { useState, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";

const URL = process.env.REACT_APP_BASE_URL;

const InputField = ({ setToast, setErrorMessage , successToast , SetsuccessToast }) => {
  const [state, setState] = useState([]);
  const [sitename, setSiteName] = useState();
  const [btn, setbtn] = useState();
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    CallAPI();
    localStorage.removeItem("sitename")
  }, []);

  const handleOptions = (e) => {
    localStorage.setItem("projectID", e.target.value);
  };

  function getCode() {
    const query = new URLSearchParams(window.location.search);
    console.log(query);

    const token = query.get("code");

    var api = fetch(`${URL}/deploy/auth/authGoogleUrl`)
      .then((res) => res.text())
      .then((re) => window.location.replace(re))
      .catch((e) => {
        console.log(e);
      });

    return api;

  }

  function CallAPI() {

    const tokens = JSON.parse(localStorage.getItem("auth"));

    if (!tokens) {
      // setToast(true)
      // setErrorMessage("Please Sign In Again")
    } else {
      const accessToken = tokens.access_token;

      fetch(`${URL}/deploy/getAllProject`, {
        method: "GET",
        headers: {
          // Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
         return response.json()
         

        
        })

        .then((actualData) => {
          const data = actualData.data;
          localStorage.setItem("projectID", data[0].projectId);
          setState(data);
        })
        .catch((err) => {
          if (err) {
            setToast(true);
            setErrorMessage(
              "Please Sign In again"
            );
            localStorage.removeItem("auth");
          }
        });
    }
  }

  var GeneratedURL = localStorage.getItem("SiteURL");
  return (
    <div className=" lg:flex   ">
      <div className="relative w-full">
        <input
          type="text"
          className="block sm:p-2.5 lg:w-full z-20  text-md md:text-md text-black bg-white  border-r-gray-100 border-r-2 border border-gray-300 focus:ring-0 focus:border-0 focus:outline-2 focus:outline-blue-600  md:w-12/12  sm:w-11/12  w-auto sm:mx-0 p-2 mx-4 sm:text-sm  text-xs   "
          placeholder="link-name"
          onChange={({ target }) => {

            const sitename = target.value;
            // setSiteName(sitename)
            if (sitename.length <= 0) {
              console.log("no value")
              return localStorage.removeItem("sitename")
              // localStorage.key("sitename") === undefined
            }

            localStorage.setItem("sitename", sitename);
          }}
        // value={}
        />
      </div>

      {localStorage.getItem("auth") == null ? (
        ''
      ) : (
        <>
          <select onChange={handleOptions} className=' text-blue-500 flex-shrink-0 z-10 inline-flex items-center py-2.5  lg:my-0 sm:my-5   sm:px-4 lg:text-md font-medium   bg-white border border-blue-600 rounded-lg  hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300  my-5  sm:text-sm text-xs lg:mx-2    '>
            {state ? (
              state.map((val, index) => {
                // console.log(val)
                return (
                  <>
                    <option key={index} value={val.projectId} className='bg-slate-100 text-black sm:text-base text-xs'>
                      {val.projectId}
                    </option>
                  </>
                );
              })
            ) : (
              <option>None</option>
            )}
          </select>
        </>
      )}

      {localStorage.getItem("auth") == null ? (
        <button
          onClick={getCode}
          className="lg:my-0 md:my-4 mx-5 flex-shrink-0 z-10 inline-flex items-center  py-2 md:-py-2  my-5 sm:px-4 md:text-md  font-medium text-center text-white hover:bg-green-800 border  border-blue-600  rounded-lg  hover:text-white  bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-truncate  sm:text-sm text-xs  px-2"
          type="button"
        >
          {" "}
          {/* { localStorage.length ===0? 'Sign In with Google' : false } */}
          Sign in with Google
          {/* {btn} */}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputField;
