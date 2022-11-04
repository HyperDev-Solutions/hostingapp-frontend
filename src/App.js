import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Upload } from "./Upload";
import UploadBox from "./UploadBox";
import DND from "./DND";
import GetALLProject from "./GetALLProject";

function App() {
  return (
    <>
      <Navbar />

      <div className=" flex justify-center  text-center">
        <h1 className="text-4xl  p-10   w-2/6 ">
          The simplest way to host & share your web project
        </h1>
      </div>

      <div className="flex  justify-center ">
        <UploadBox />
        {/* <DND/> */}
      </div>
      <GetALLProject/>



    </>
  );
}

export default App;
