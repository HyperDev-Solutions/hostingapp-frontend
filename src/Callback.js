import React, { useEffect } from "react";
// import { useLocation  , useHistor } from "react-router-dom";

const Callback = () => {
    // const history=useHistory()
//   console.log("sd");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search); // id=123
    let code = params.get("code");
    console.log(code);

    fetch(`http://localhost:8000/api/deploy/auth/googleToken?code=${code}`)
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
      hel
      {/* <a href='http://localhost:8000/api/deploy/auth/authGoogleUrl' > LINK   </a> */}
    </div>
  );
};

export default Callback;
