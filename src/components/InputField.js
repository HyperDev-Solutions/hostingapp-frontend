import React, { useState, useEffect } from "react";

const InputField = () => {
  const [state, setState] = useState([]);




  
  // useEffect(() => {
  //   // CallAPI()
  // }, []);

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

      return api 

    // const params = window.location.search
    // console.log(params)
    // let code = params.get("code");
    // console.log(code);
  }

  function CallAPI() {
    const tokens = JSON.parse(localStorage.getItem("auth"));
    // console.log("tokens.access_token" , tokens.access_token);
    const accessToken = tokens.access_token;

    // if ( localStorage.getItem("auth").length==0){
    //   return getCode()
    // }

    fetch(`http://localhost:8000/api/deploy/getAllProject`, {
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

        setState(data);
        //  setState(actualData)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="flex">
      <div className="relative w-full">
        <input
          type="text"
          className="block p-2.5 w-full z-20 text-md text-black bg-white rounded-l-lg border-r-gray-100 border-r-2 border border-gray-300 focus:ring-0 focus:border-0 focus:outline-2 focus:outline-blue-600"
          placeholder="link-name"
        />
      </div>
      <button
        onClick={CallAPI}
        className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-blue-600 bg-white border border-blue-600  rounded-r-lg  hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 "
        type="button"
      >
        Projects:  
        
        {/* {localStorage.getItem("projectID").length === 0
          ? " Get All Project"
          : ""} */}

        <select
          name="pets"
          id="pet-select"
          onChange={(e) => {
            console.log(e.target.value);
            localStorage.setItem("projectID", e.target.value);
          }}
        >
          {state.map((val, index) => {
            return (
              <>
                <option
                  key={index}
                  onSelect={(e) => {
                    // localStorage.setItem("projectID", val.projectId)
                    // console.log(e)
                  }}
                  value={val.projectId}
                >
                  {val.projectId}
                </option>
                {/* <button className="p-5 my-10 text-white  border-0 py-2 px-6 focus:outline-none  rounded text-lg" onClick={()=>{
                          console.log(val.projectId)
                          
                    // setbutton("Project Id selected")
                    }}> */}
                Project ID
                {/* </button> */}
              </>
            );
          })}
        </select>

        {/* </path>
        </svg> */}
      </button>

      {/* <button  onClick={GenerateURL} className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-blue-600 bg-white border border-blue-600  rounded-r-lg hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 " type="button"> Generate URL 
    </button> */}

      <button
        onClick={getCode}
        className=" mx-5 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white hover:bg-green-800 border  border-blue-600  rounded-r-lg  hover:text-white  bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 "
        type="button"
      >
        {" "}

        { localStorage.length ===0? 'Sign In with Google' : " Deploy"}
        
        {" "}
      </button>
    </div>
  );
};

export default InputField;
