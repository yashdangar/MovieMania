import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.png";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      // console.log(data.results)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearches();
  }),
    [query];

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto items-center mt-2 px-20">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[45%] text-zinc-200 mx-3 p-3 text-md outline-none border-none bg-[#2e2e32] rounded-3xl"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-2xl ri-close-fill"
        ></i>
      )}
      <div className="z-[100] absolute w-[45%] max-h-[50vh] bg-zinc-600 top-[90%] overflow-auto rounded-lg">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-800 duration-300 font-semibold text-zinc-600 w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100 "
          >
            <img
              className="w-[6.5vh] h-[6.5vh] mr-5 rounded-md object-cover shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span className="text-zinc-300">
              {s.original_title || s.name || s.title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
