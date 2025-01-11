import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] mx-h-screen  border-zinc-400 px-5">
      <div className="fixed">
      <h1 className="text-2xl text-white font-bold pb-5 mt-2">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-xl">MoviesMania</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl py-3">New Feeds</h1>
        <Link
          to={"/trending"}
          className="hover:bg-[#6556CD] hover:text-white text-lg duration-300 rounded-lg p-4 w-[34vh]"
        >
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to={"/popular"}
          className="hover:bg-[#6556CD] hover:text-white text-lg duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>

        <Link
          to={"/movie"}
          className="hover:bg-[#6556CD] hover:text-white text-lg duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to={"/tvshows"}
          className="hover:bg-[#6556CD] hover:text-white text-lg duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-fire-fill"></i>
          TV Shows
        </Link>
        <Link 
          to={"/person"}
          className="hover:bg-[#6556CD] hover:text-white text-lg duration-300 rounded-lg p-3">
          <i className="mr-2 ri-team-fill"></i>
          Peoples
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 my-3" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl my-2">Website Info</h1>
        <Link to={"/about"} className="hover:bg-[#6556CD] hover:text-white text-lg duration-300 rounded-lg p-3">
          <i className="mr-2 ri-information-fill"></i>
          About Us
        </Link>
      </nav>
      </div>
    </div>
  );
}

export default Sidenav;
