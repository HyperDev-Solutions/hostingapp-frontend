import React, { useEffect, useState } from "react";

const URL=process.env.REACT_APP_BASE_URL
const GetALLProject = ({projectid}) => {
  const [state, setState] = useState([]);
  // const [button, setbutton] = useState('Select Project ID');
  const [ProjectID, setProjectId] = useState();



  const tokens = JSON.parse(localStorage.getItem("auth"));
  console.log("tokens.access_token" , tokens.access_token);
  const accessToken=tokens.access_token;


  function CallAPI() {
    fetch(`${URL}/deploy/getAllProject`, {
      method: "GET",
      headers: {
        // Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())

      .then((actualData) => {
        console.log(actualData)
        const data = actualData.data;

        setState(data);
        //  setState(actualData)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    CallAPI()
  },[]);

  // useEffect(() => {
  //   fetch(`http://192.168.18.62:4000/api/deploy/getAllProject`, {
  //     method: "GET",
  //     headers: {
  //       // Accept: 'application/json',
  //       Authorization: `Bearer ya29.a0Aa4xrXNdNb4EReolDQQwvrskYmuH7510_qFswdNZCWIEBq3tskr_AwvHK6ZcRC1USP8D7mSwc30vPp8_pQ9IfUv51zGrMkseGjK_8RAOTk_TNNybuqKOSjK8nJyBoT5ldMCJL8CkKQy6KlmLwW5CYaCcVAuLaCgYKAf0SARMSFQEjDvL9UY4bi9ZGtSQDBA_TrvNT8w0163`,

  //     },
  //   })
  //     .then((response) => response.json())

  //      .then((actualData) => console.log(actualData))
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  // function CallAPi() {
  //   //access token will be retrieved after firebase login

  //   fetch("http://192.168.18.62:4000/api/deploy/getAllProject", {
  //     method: "GET",
  //     headers:"ya29.a0Aa4xrXNwD1fHrY0C01QBOM42_2yLwcdYbCiL6xsjkW2WntE5qBBeQBzyYRcCEZzDWu0k-o24vh4Yu4sl2CUFcPZUY0JdDmHz4QmhLDwurrZkWPCtV6rIHpPGgt4IvpG1rCjbbkWvVh9md2FoAhRlZxcwJR3caCgYKAWASARMSFQEjDvL94SHQMqJjeNiVfiWVSIaFgw0163",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  // callAPi

  // console.log(something)

  return (
    <>
      {/* <button
        className="p-5  bg-gray-900 text-white"
        onClick={() => {
          // CallAPI()

          
        }}
      >
        GET ALL PROJECT
      </button> */}


      <section className="text-gray-600 body-font"></section>

          <h1 className="text-5xl text-center my-32  text-gray-800 font-semibold"   >  MY PROJECTS </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
      {state.map((val,index) => {
        return (
          <>
                <div className="xl:w-1/3 md:w-1/2 p-4" key={index + 1 } >
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Display Name - {val.displayName}
                    </h2>
                    <p className="leading-relaxed text-base"> Project ID - {val.projectId}</p>
                    <button className="p-5 my-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{
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
