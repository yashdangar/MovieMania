import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data,title="null" }) {
  // console.log(data);

  return (
    <div className="w-full p-5">
      <div className="w-[100%] flex overflow-y-hidden ">
        {data.map((d, i) => (
          <Link
            to={`/${d.media_type || title}/details/${d.id}`}
            key={i}
            className="min-w-[18%] h-[50vh] bg-zinc-900 mr-5 mb-5 rounded"
          >
            <img
              className="w-full h-[55%] object-cover overflow-hidden"
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />

            <div className="text-white p-3 h-[45%] overflow-y-auto">
              <h1 className="text-xl font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-zinc-300">
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
