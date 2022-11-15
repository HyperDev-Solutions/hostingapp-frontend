import React, { useState, useEffect } from "react";

const URL = process.env.REACT_APP_BASE_URL;

const InputField = ({ setToast, setErrorMessage }) => {
  const [state, setState] = useState([]);
  const [sitename, setSiteName] = useState();
  const [btn, setbtn] = useState();
  const [selectValue, setSelectValue] = useState("");
  const [storingSelect, setSelectStored] = useState("");

  useEffect(() => {
    CallAPI();
    localStorage.removeItem("sitename")
  }, []);

  const handleOptions = (e) => {
    console.log("why");
    localStorage.setItem("projectID", e.target.value);
  };

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

    return api;

    // const params = window.location.search
    // console.log(params)
    // let code = params.get("code");
    // console.log(code);
  }

  function CallAPI() {
    const tokens = JSON.parse(localStorage.getItem("auth"));
    // console.log("tokens.access_token" , tokens.access_token);
    if (!tokens) {
      setToast(true)
      setErrorMessage("Please Sign In Again")
    } else {
      const accessToken = tokens.access_token;

      // if ( localStorage.getItem("auth").length==0){
      //   return getCode()
      // }

      fetch(`${URL}/deploy/getAllProject`, {
        method: "GET",
        headers: {
          // Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())

        .then((actualData) => {
          console.log(actualData);
          const data = actualData.data;
          console.log(data);
          localStorage.setItem("projectID", data[0].projectId);
          setState(data);
        })
        .catch((err) => {
          // console.log(err.message);
          // if (Api.status >= 400) {
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
        <button
          // onClick={(e)=>  localStorage.setItem("projectID",selectValue)}
          className=" flex-shrink-0 z-10 inline-flex items-center py-2.5  lg:my-0 sm:my-5   sm:px-4 lg:text-md font-medium text-center text-blue-600 bg-white border border-blue-600 rounded-lg  hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300  my-5  sm:text-sm text-xs lg:mx-2  md:mx-auto  "
          type="button"
        >
          {/* Projects: */}
        
          <select onClick={handleOptions} className='text-truncate'>
            {state ? (
              state.map((val, index) => {
                return (
                  <>
                    <option key={index} value={val.projectId}>
                      {val.projectId}
                    </option>
                    {/* <button className="p-5 my-10 text-white  border-0 py-2 px-6 focus:outline-none  rounded text-lg" onClick={()=>{
                  console.log(val.projectId)
                  
            // setbutton("Project Id selected")
            }}> */}
                    {/* Project ID */}
                    {/* </button> */}
                  </>
                );
              })
            ) : (
              <option>None</option>
            )}
          </select>
          {/* </path>
</svg> */}
        </button>
      )
      
      }

      {/* <button  onClick={GenerateURL} className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-blue-600 bg-white border border-blue-600  rounded-r-lg hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 " type="button"> Generate URL 
    </button> */}

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
