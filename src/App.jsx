import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import SignIn from "./components/loginScreen/SignIn";
import SignInRepo from "./components/signUpForm/SignInRepo";
import RepoUI from "./components/repoScreen/RepoUI";
import Repositories from "./components/repoScreen/sideBarContent/Repositories";
import AICodeReview from "./components/repoScreen/sideBarContent/AICodeReview";
import HowToUse from "./components/repoScreen/sideBarContent/HowToUse";
import Settings from "./components/repoScreen/sideBarContent/Settings";
import SideBar from "./components/repoScreen/sideBarContent/SideBar";

function App() {
  // const router=createBrowserRouter(
  //   [
  //     {
  //       path:""
  //     }
  //   ]
  // )
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/singIn" element={<SignInRepo />} />
        <Route path="/repo" element={<RepoUI />} />
        <Route
          path="/repoContent"
          element={
             <div className="flex ">
            <div className="w-[208px]  z-10 shadow-lg shadow-slate-400">
              <SideBar />
            </div>
            <div className="w-[1100px]">
              <Repositories />
            </div>
          </div>
        }
          
        />
        <Route
          path="/AIReview"
          element={
            <div className="flex">
              <div className="w-52  h-screen z-10 shadow-lg shadow-slate-400">
                <SideBar />
              </div>
              <div>
                <AICodeReview />
              </div>
            </div>
          }
        />
        <Route
          path="/instructions"
          element={
            <div className="flex">
              <div className="w-52  h-screen z-10 shadow-lg shadow-slate-400">
                <SideBar />
              </div>
              <div>
                <HowToUse />
              </div>
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="flex">
              <div className="w-52  h-screen z-10 shadow-lg shadow-slate-400">
                <SideBar />
              </div>
              <div>
                <Settings />
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
