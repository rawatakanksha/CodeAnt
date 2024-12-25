import React from "react";
import SideBar from "./sideBarContent/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function RepoUI() {
  return (
    <div className="h-screen flex  ">
      <div className="w-52  h-screen z-10 shadow-lg shadow-slate-400">
        <SideBar />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default RepoUI;
