import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../../store/actions/movieActions";
import Loading from "../Loading";
import HorizontalCards from "../templates/HorizontalCards";


function Moviedetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie(id));
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[160vh] px-[10%]"
    >
      {/* part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line hover:text-[#6556CD]"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>
      {/* part 2 poster and details */}
      <div className="w-full flex">
        <img
          className=" shadow-[8px_17px_38px_2px_rgba(0,0,0, .5)] h-[55vh] object-cover rounded"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="ml-[3%] text-white">
  
          {/* title */}
          <h1 className=" text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <span className="text-2xl font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </span>
          </h1>
          {/* below title content */}
          <div className="mt-2 flex text-white items-center gap-x-3">
            <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="font-semibold w-[4.5vw] text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}mins</h1>
          </div>
          {/* tagline */}
          <h1 className="text-xl font-semibold italic text-zinc-200 mt-3">
            {info.detail.tagline}
          </h1>
          <h1 className="text-2xl mb-3 mt-5">Overview</h1>
          <p className="mb-10">{info.detail.overview}</p>
          <Link
            className="p-5 bg-[#6556cd] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill mr-3 text-xl"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* part 3 available on platforns*/}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.rent.map((w,i) => (
              <img key = {i}
                title={w.provide_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w,i) => (
              <img key = {i}
                title={w.provide_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w,i) => (
              <img key = {i}
                title={w.provide_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part 4 recommendation */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-400"/>
      <h1 className="text-3xl font-bold text-white ">Recommendations</h1>
      <HorizontalCards data = {info.recommendations.lenght>0 ? info.recommendations : info.similar} title="movie" />
      <Outlet/>
    </div>
  ) : (
    <Loading />
  );
}

export default Moviedetails;
