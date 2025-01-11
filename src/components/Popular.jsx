import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  document.title = "Movie Mania | Popular";

  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      //   setPopular(data.results);
      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-full h-screen">
      <div className="w-full flex items-center justify-between">
      <div className="px-6 lg:px-8 flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 mt-1"
          aria-label="Go Back"
        >
          <i className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-purple-400"></i>
        </button>
        <h1 className="text-xl font-semibold text-zinc-400">Popular</h1>
      </div>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;
