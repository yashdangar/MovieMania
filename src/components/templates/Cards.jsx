import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  // console.log(data);
  return (
    <div className="flex flex-wrap w-full h-full bg-[#1F1E24] px-[2%] pt-[2%] ">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          className="relative w-[30vh] mr-[4%] mb-[3%]"
        >
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0, .5)] h-[45vh] object-cover rounded"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[-12%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
