import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Upload } from "./Upload";
import UploadBox from "./UploadBox";
import DND from "./DND";
import GetALLProject from "./GetALLProject";
import SideText from "./components/SideText";

function App() {
  return (
    <>
      <Navbar />

      <div className=" flex justify-center  text-center">
        <h1 className="text-4xl  p-10  font-semibold w-5/12 ">
          The simplest way to host & share your web project
        </h1>
      </div>

      <div className="flex  justify-center gap-x-20 ">
        <SideText/>
        <UploadBox />
        {/* <DND/> */}
      </div>
      <GetALLProject/>



    </>
  );
}

export default App;
