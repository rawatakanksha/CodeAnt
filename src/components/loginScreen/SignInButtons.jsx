import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInButtons() {
  const [saas, setSaas] = useState(true);
  const [selfHosted, setSelfHosted] = useState(false);
  const navigate= useNavigate();

  function handleSaas(e) {
    e.preventDefault();
    setSaas(true);
    setSelfHosted(false);
    console.log("saaaass", saas);
  }

  function handleSelfHosted(e) {
    e.preventDefault();
    setSaas(false);
    setSelfHosted(true);
    console.log("ssselff", selfHosted, saas);
  }
  function repoCont(e){
    e.preventDefault();
  navigate('/singIn');
}
  return (
    <>
      <div className="flex justify-evenly m-2">
        <button className={`border shadow-md w-[170px] m-2 rounded-md h-9 hover:-translate-x-2 hover:-translate-y-2
        ${
          saas === true ? "bg-blue-500 text-white" : "bg-white"
        }`} onClick={handleSaas}>
          SAAS
        </button>
        <button className={`border shadow-md w-[170px] m-2 rounded-md h-9 hover:-translate-x-2 hover:-translate-y-2
        ${
          selfHosted === true ? "bg-blue-500 text-white" : "bg-white"
        }`}
         onClick={handleSelfHosted}>
          Self Hosted
        </button>
      </div>
      <div>
        {saas && (
          <>
            <div onClick={repoCont} className="flex justify-center items-center m-2 border w-[300px] h-[40px] ml-12 rounded-lg shadow-md
            hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer">
              <img src="../../public/github.jpeg" className="w-10 mr-2" />
              <p>Sign in with Github</p>
            </div>

            <div onClick={repoCont} className="flex justify-center items-center m-2 border w-[300px] h-[40px] ml-12 rounded-lg shadow-md
            hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer">
              <img src="../../public/bitBucket.png" className="w-6 mr-3" />
              <p>Sign in with Bitbucket</p>
            </div>

            <div onClick={repoCont} className="flex justify-center items-center m-2 border w-[300px] h-[40px] ml-12 rounded-lg shadow-md
            hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer">
              <img src="../../public/azure-devops.jpg" className="w-10 mr-1" />
              <p>Sign in with Azure Devops</p>
            </div>
            <div onClick={repoCont} className="flex justify-center items-center m-2 border w-[300px] h-[40px] ml-12 rounded-lg shadow-md
            hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer">
              <img src="../../public/gitLab.jpeg" className="w-6 mr-3" />
              <p>Sign in with GitLab</p>
            </div>
          </>
        )}
        {
            selfHosted && (
                <>
                <div onClick={repoCont} className="flex justify-center items-center m-2 border w-[300px] h-[40px] ml-12 rounded-lg shadow-md
                hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer">
              <img src="../../public/gitLab.jpeg" className="w-6 mr-3" />
              <p>Self Hosted GitLab</p>
            </div>

           
            <div onClick={repoCont} className="flex justify-center items-center m-2 border w-[300px] h-[40px] ml-12 rounded-lg shadow-md
            hover:-translate-x-2 hover:-translate-y-2 hover:cursor-pointer">
              <img src="../../public/SSo.jpeg" className="w-6 mr-3" />
              <p>Sign in with SSO</p>
            </div>
                </>
            )
        }
      </div>
    </>
  );
}

export default SignInButtons;
