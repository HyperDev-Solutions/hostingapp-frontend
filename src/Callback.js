import React, { useEffect } from "react";
// import { useLocation  , useHistor } from "react-router-dom";

const URL=process.env.REACT_APP_BASE_URL

const Callback = () => {
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search); // id=123
    let code = params.get("code");


    // fetch(`http://localhost:8000/api/deploy/auth/googleToken?code=${code}`)
    fetch(`${URL}/deploy/auth/googleToken?code=${code}`)
      .then(res=>res.json())
      .then((re) => {
            console.log(re) 
            localStorage.setItem("auth", JSON.stringify(re.tokens));
            // history.push('/')
            window.location.href = '/';
            
        }).catch(e=>{
          
          
          console.log(e)
      });
  });

  return (
    <div>
      
      {/* <a href='http://localhost:8000/api/deploy/auth/authGoogleUrl' > LINK   </a> */}
    </div>
  );
};

export default Callback;
