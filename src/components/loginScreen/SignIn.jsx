import React from "react";
import SignInButtons from "./SignInButtons";

function SignIn() {
  return (
    <>
      <div className="flex divide-x-2 h-screen ">
        <div className="pr-24">
          <div
            className=" relative border flex flex-col divide-y w-[400px] mt-40 ml-36 rounded-lg z-0 shadow-xl
    shadow-slate-400 h-36
    "
          >
            <div className="flex items-center justify-center p-2 ">
              <img src="../public/Subtract (1).png"></img>
              <p className="p-2">AI to Detect & Atofix Bad Code</p>
            </div>

            <div className="flex items-center justify-center ">
              <div className="flex flex-col p-3 items-center justify-center ">
                <p className="font-semibold">30+</p>
                <p className=""> Language support</p>
              </div>
              <div className="flex flex-col p-3 items-center justify-center ">
                <p className="font-semibold">10K+</p>
                <p className="">Developers</p>
              </div>
              <div className="flex flex-col p-3 items-center justify-center ">
                <p className="font-semibold">100k+</p>
                <p className="">Hours Saved</p>
              </div>
            </div>
          </div>

          <div
            className="absolute top-72 ml-80 w-[250px] border p-2 flex flex-col rounded-xl shadow-xl
    z-20 shadow-slate-400 bg-slate-50
    "
          >
            <div className="flex justify-evenly ">
              <img src="../../public/Group 4.png" className="" />
              <div className="">
                <div className="flex">
                  <svg
                    class="w-6 h-6 text-blue-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v13m0-13 4 4m-4-4-4 4"
                    />
                  </svg>
                  <p className="text-blue-800 font-semibold ">14%</p>
                </div>
                <div>
                  <p> This Week</p>
                </div>
              </div>
            </div>
            <div className="  m-2 ">
              <p className="font-bold">Issues Fixed</p>
              <p className="text-3xl font-extrabold">500K+</p>
            </div>
          </div>
          <div>
            <img
              src="../../public/Subtract.png"
              className="w-40 translate-y-20 translate-x-4"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center  ">
          <div
            className=" flex-col justify-center items-center text-center  ">
            <div
              className="flex flex-col justify-center text-center items-center m-16
                     border w-[400px] h-[450px] rounded-lg shadow-lg shadow-slate-400 mb-6 "
            >
              <div className="flex justify-center m-2">
                <img className="mr-2" src="../../public/Subtract (1).png" />
                <p>CodeAnt AI</p>
              </div>
              <p className="text-lg font-semibold">Welcome to CodeAnt AI</p>
              <div className="">
                <SignInButtons />
              </div>
            </div>

            <div>
              <p className="">
                By signing up you agree to the <b>Privacy Policy</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
