import React from "react";
import Data from "../repoContent/repoName.json";
import RepoContent from "../repoContent/RepoContent";

function Repositories() {
  const repo = Data.repo;
  return (
    <>
      <div className="m-4 mt-2 mb-1 rounded-lg border shadow-lg flex  ">
        <div>
          <h1 className="text-lg font-semibold m-2 mb-1">Repositories</h1>
          <p className="text-xs m-2 mt-0">33 total repositories</p>
          <input
            type="text"
            className="border m-3 rounded shadow-lg"
            placeholder="Search Repositories"
          ></input>
        </div>

        <div className="translate-x-[640px]">
          <button className="m-2 border rounded h-8 shadow-lg">Refresh</button>
          <button className="m-2 border rounded h-8 shadow-lg">
            +repositories
          </button>
        </div>
      </div>
      <div className="m-4 mt-0 rounded-lg  shadow-lg">
        <ul className="">
          {repo.map((pro) => (
            <RepoContent
              key={pro.id}
              name={pro.name}
              lang={pro.lang}
              status={pro.status}
              update={pro.update}
              memory={pro.memory}
            ></RepoContent>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Repositories;
