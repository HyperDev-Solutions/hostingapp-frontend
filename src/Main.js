import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";
import SideText from './components/SideText'
import DND from './DND'
import GetALLProject from './GetALLProject'
import { Navbar } from './Navbar'
import UploadBox from './UploadBox'
<SideText/>

const Main = () => {
 
  return (
    <>

    <div>
        {/* <h1>hellow</h1> */}
      {/* <Navbar/>
      <UploadBox/>
      <DND/> */}

                  <Navbar/>

<div className=" flex justify-center  text-center">
  <h1 className="text-4xl  p-10  font-semibold w-5/12 ">
    The simplest way to host & share your web project
  </h1>
</div>

<div className="flex  justify-center gap-x-20 ">
  <SideText />
  <UploadBox />
</div>
    </div>
    {/* <GetALLProject/> */}
    {
      // localStorage.getItem("projectID") ?    <GetALLProject/>      :  ''
    }
    </>
  )
}

export default Main
