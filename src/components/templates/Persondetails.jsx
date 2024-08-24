import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  asyncloadperson,
  removeperson,
} from "../../store/actions/personActions";
import Loading from "../Loading";
import HorizontalCards from "../templates/HorizontalCards";

function Persondetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const [more, setMore] = useState(false);
  console.log(more);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson(id));
    };
  }, [id]);
  return info ? (
    <div className="px-[5%] w-screen bg-[#1f1e24]">
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-3xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line hover:text-[#6556CD]"
        ></Link>
      </nav>
      <div className="w-full flex">
        {/* left side */}
        <div className="mt-2 w-[25%]">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0, .5)] h-[40vh] object-cover rounded"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-7 mb-5 border-none h-[2px] bg-zinc-400" />
          {/* links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>
          {/* personal info */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-2">
            Personal Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className=" text-zinc-400 mb-2">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Gender</h1>
          <h1 className="text-zinc-400 mb-2">
            {info.detail.gender == 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Birthday</h1>
          <h1 className="text-zinc-400 mb-2">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Deathday</h1>
          <h1 className="text-zinc-400 mb-2">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">
            Place of Birth
          </h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>
        </div>

        {/* right side */}
        <div className="w-[75%] ml-[5%]">
          <h1 className="text-5xl text-zinc-400 font-black">
            {info.detail.name}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semiboldmt-3 mt-3 font-bold">Biography</h1>
          <h1 className=" text-zinc-400">
            {more ? info.detail.biography : info.detail.biography.slice(0, 200)}

            <button onClick={() => setMore(!more)} className="text-blue-600">
              {" "}
              {more
                ? " less.."
                : "more.."}
            </button>
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 font-bold">
            Movies And Shows
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Persondetails;
