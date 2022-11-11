import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";
import Toast from './components/feedback/Toast';
import SideArrow from './components/SideArrow';
import SideText from './components/SideText'
import DND from './DND'
import GetALLProject from './GetALLProject'
import { Navbar } from './Navbar'
import UploadBox from './UploadBox'
<SideText/>

const Main = () => {
 
  const [openToast,setToast]=useState(false);
  const [errorMessage,setErrorMessage]=useState('');

  return (
    <>

    <div style={{background: "linear-gradient(135deg,#fff,#f8f8f8 59%)"}}>
        {/* <h1>hellow</h1> */}
      {/* <Navbar/>
      <UploadBox/>
      <DND/> */}

                  <Navbar/>

<div className=" flex justify-center  text-center">
  <h1 className="lg:text-4xl md:text-4xl text-3xl   lg:p-10 md:p-8 p-7  font-semibold lg:w-5/12 md:w-8/12  w-8/12">
    The simplest way to host & share your web project
  </h1>
</div>

<div className="flex  justify-between">
  <SideText  />
  <UploadBox setErrorMessage={setErrorMessage} setToast={setToast} />
  <SideArrow/>
</div>
  {openToast && <Toast message={errorMessage} setToast={setToast}/> }
    </div>
    {/* <GetALLProject/> */}
    {
      // localStorage.getItem("projectID") ?    <GetALLProject/>      :  ''
    }
    </>
  )
}

export default Main
