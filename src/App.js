import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Upload } from "./Upload";
import UploadBox from "./UploadBox";
import DND from "./DND";
import GetALLProject from "./GetALLProject";
import SideText from "./components/SideText";
import Callback from "./Callback";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";

function App() {
 console.log(process.env.REACT_APP_BASE_URL)
 return (
    <>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <Route exact path="/callback">
              <Callback />
            </Route>
            {/* <GetALLProject/> */}
        {
          // localStorage.getItem("projectID") ?  <Route exact path="/getallproject">  <GetALLProject/>     </Route> :  window.location.href = '/'
        }    {/* <Route path="about" element={<} /> */}
          </Switch>
        </div>
      </BrowserRouter>



      {/* <Router> */}

      {/* <Routes> */}
      {/* <Route  path="/"> */}
      {/* <Callback /> */}
      {/* </Route> */}

      {/* <Route  path="/s"> */}
      {/* <Callback /> */}
      {/* <Navbar/>

<div className=" flex justify-center  text-center">
  <h1 className="text-4xl  p-10  font-semibold w-5/12 ">
    The simplest way to host & share your web project
  </h1>
</div>

<div className="flex  justify-center gap-x-20 ">
  <SideText />
  <UploadBox />
</div> */}
      {/* <DND/> */}

      {/* </Route> */}

      {/* </Routes> */}

      {/* </Router> */}
    </>
  );
}

export default App;
